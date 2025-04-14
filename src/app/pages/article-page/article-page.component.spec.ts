import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ArticlePageComponent } from './article-page.component';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Article } from '../../models/Article.model';
import { HttpClientModule } from '@angular/common/http'; // Si besoin de HttpClient

describe('ArticlePageComponent', () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePageComponent], // Standalone component !
      providers: [
        // Mock ActivatedRoute to simulate /articles/1
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => '1'
            })
          }
        },
        // Mock ApiService
        {
          provide: ApiService,
          useValue: {
            getArticleById: (id: number) => of({
              id,
              title: 'Mock Article',
              author: 'Author',
              content: 'Lorem ipsum',
              imageUrls: '',
              imageTitle: '',
              isPublished: true,
              comment: '',
              isLiked: true,
              likeCount: 0,
              categoryName: 'Mock'
            } as Article)
          }
        },
        // Mock ToastrService
        {
          provide: ToastrService,
          useValue: {
            success: jasmine.createSpy('success')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Call ngOnInit
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });



  it('should load article with ID 1 and call toastr', (done) => {
    component.article$.subscribe(article => {
      expect(article.id).toBe(1);
      expect(article.title).toBe('Mock Article');
      done();
    });
  });
});
