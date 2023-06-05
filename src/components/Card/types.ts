
import { Photo } from "../../models/Photo";

export type Props = {
   photo: Photo
   onRemove: (photo:Photo) => void
};