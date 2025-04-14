export interface Article{
  id: number;
  title: string;
  author:  string;
  content: string;
  imageUrls:  string[];
  imageIds:  number[];
  imageTitle:  string;
  published: boolean;
  comment:  string;
  isLiked: true;
  likeCount: number;
  categoryName: string;
}
