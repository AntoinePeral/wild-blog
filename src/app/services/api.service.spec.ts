import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // 👉 ON RESTE DANS PROVIDERS
      providers: [
        ApiService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all Articles from API', () => {
    service.getArticles().subscribe(data => {
      expect(data).toEqual([{
        id:1,
        title: 'Mock Article',
        author: 'Author',
        content: 'Lorem ipsum',
        imageUrls: '',
        imageTitle: '',
        isPublished: true,
        comment: '',
        isLiked: true,
        likeCount: 0,
        categoryName: 'Mock'}]);
    });


    const req = httpMock.expectOne('http://localhost:8080/articles');
    expect(req.request.method).toBe('GET');
    req.flush([{
      id: 1,
      title: 'Mock Article',
      author: 'Author',
      content: 'Lorem ipsum',
      imageUrls: '',
      imageTitle: '',
      isPublished: true,
      comment: '',
      isLiked: true,
      likeCount: 0,
      categoryName: 'Mock' }]);
  });

  it('should fetch one Article from API', () => {
    service.getArticleById(1).subscribe(data => {
      expect(data).toEqual({
        id:1,
        title: 'Mock Article',
        author: 'Author',
        content: 'Lorem ipsum',
        imageUrls: '',
        imageTitle: '',
        isPublished: true,
        comment: '',
        isLiked: true,
        likeCount: 0,
        categoryName: 'Mock'});
    });


    const req = httpMock.expectOne('http://localhost:8080/articles/1');
    expect(req.request.method).toBe('GET');
    req.flush({
      id: 1,
      title: 'Mock Article',
      author: 'Author',
      content: 'Lorem ipsum',
      imageUrls: '',
      imageTitle: '',
      isPublished: true,
      comment: '',
      isLiked: true,
      likeCount: 0,
      categoryName: 'Mock' });
  });
});
