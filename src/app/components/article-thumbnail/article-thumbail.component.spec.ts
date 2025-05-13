import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleThumbnailComponent } from './article-thumbnail.component';
import { ActivatedRoute } from '@angular/router';

describe('ArticleThumbailComponent', () => {
  let component: ArticleThumbnailComponent;
  let fixture: ComponentFixture<ArticleThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleThumbnailComponent, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleThumbnailComponent);
    component = fixture.componentInstance;

    component.article = { id: 1,
      title: 'Mock Article',
      author: 'Author',
      content: 'Lorem ipsum',
      imageUrls: [],
      imageIds: [],
      imageTitle: '',
      published: true,
      comment: '',
      isLiked: true,
      likeCount: 0,
      categoryName: 'Mock'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the input message', () => {

    // fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Mock Article');
  });

  it('should emit an event when button is clicked', () => {
    spyOn(component.dataEmitFromChild, 'emit');
    const button = fixture.nativeElement.querySelector('#send_data_parent');

    button.click();

    expect(component.dataEmitFromChild.emit).toHaveBeenCalledWith(`l'article "${component.article.title}" vient d'être liké ❤`);
  });
});
