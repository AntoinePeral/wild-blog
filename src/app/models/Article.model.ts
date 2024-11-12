export interface Article{
  id: number;
  title: string; 
  author:  string;  
  content: string; 
  image:  string; 
  imageTitle:  string; 
  isPublished: boolean; 
  comment:  string; 
  isLiked: number; 
  likeCount: number;
  categoryName: string;
}