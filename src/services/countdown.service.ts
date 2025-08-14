import { Subject, interval, Subscription } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';

export class CountdownService {
  private timeCounter$ = new Subject<number>();
  private alphabetProgression$ = new Subject<string>();
  private timeSubscription?: Subscription;
  private alphabetSubscription?: Subscription;
  
  private timeInterval$ = interval(1000).pipe(
    startWith(0),
    scan((acc) => acc + 1, 0)
  );
  
  private alphabetInterval$ = interval(1000).pipe(
    startWith(0),
    map(index => {
      const alphabetIndex = index % 26;
      return String.fromCharCode(65 + alphabetIndex);
    })
  );
  
  startTimeCounter() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
    this.timeSubscription = this.timeInterval$.subscribe(value => {
      this.timeCounter$.next(value);
    });
  }
  
  startAlphabetProgression() {
    if (this.alphabetSubscription) {
      this.alphabetSubscription.unsubscribe();
    }
    this.alphabetSubscription = this.alphabetInterval$.subscribe(letter => {
      this.alphabetProgression$.next(letter);
    });
  }
  
  getTimeCounter() {
    return this.timeCounter$.asObservable();
  }
  
  getAlphabetProgression() {
    return this.alphabetProgression$.asObservable();
  }
  
  stopAll() {
    this.timeCounter$.complete();
    this.alphabetProgression$.complete();
  }
}

export const countdownService = new CountdownService();