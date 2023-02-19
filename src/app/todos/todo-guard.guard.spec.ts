import { TestBed, async, inject } from '@angular/core/testing';

import { TodoGuardGuard } from './todo-guard.guard';

describe('TodoGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoGuardGuard]
    });
  });

  it('should ...', inject([TodoGuardGuard], (guard: TodoGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
