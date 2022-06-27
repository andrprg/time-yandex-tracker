import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { MessagesStoreService } from './messages-store.service';

describe('MessagesStoreService', () => {
  let service: MessagesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(MessagesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('должен быть инициализирован пустыми массивами', (done) => {
    service.state$.subscribe((result) => {
      expect(result.errors.length).toBe(0);
      expect(result.warns.length).toBe(0);
      expect(result.messages.length).toBe(0);
      done();
    });
  });

  it('проверяем ошибки в store', (done) => {
    service.showErrors('error 1');
    service.state$.subscribe((result) => {
      expect(result.errors).toEqual(['error 1']);
      done();
    });
  });

  it('проверяем предупреждения в warn', (done) => {
    service.showsWarns('warn 1');
    service.state$.subscribe((result) => {
      expect(result.warns).toEqual(['warn 1']);
      done();
    });
  });

  it('проверяем сообщения в messages', (done) => {
    service.showMessages('message 1');
    service.state$.subscribe((result) => {
      expect(result.messages).toEqual(['message 1']);
      done();
    });
  });

  it('подписываемся на получения сообщения об ошибках', done => {
    service.errors$.subscribe(data => {
      expect(data).toEqual(['error 1']);
      done();
    });
    service.showErrors('error 1');
  });


  it('подписываемся на получения сообщений о предупреждений', done => {
    service.warns$.subscribe(data => {
      expect(data).toEqual(['warn 1']);
      done();
    });
    service.showsWarns('warn 1');
  });

  it('подписываемся на получения сообщений ', done => {
    service.messages$.subscribe(data => {
      expect(data).toEqual(['message 1']);
      done();
    });
    service.showMessages('message 1');
  });

});
