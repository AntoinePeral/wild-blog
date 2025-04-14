export interface Article{
  id: number;
  title: string;
  author:  string;
  content: string;
  imageUrls:  string;
  imageTitle:  string;
  isPublished: boolean;
  comment:  string;
  isLiked: true;
  likeCount: number;
  categoryName: string;
}
