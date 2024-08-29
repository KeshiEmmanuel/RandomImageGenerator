export type PhotoType = {
  alt_description?: string;
  alternative_slugs?: string;
  asset_type?: string;
  blur_hash?: string;
  breadcrumbs?: string[];
  color?: string;
  created_at?: string;
  current_user_collections?: string[];
  description?: null | string;
  downloads?: number;
  exif?: object;
  height?: number;
  id: string;
  liked_by_user?: boolean;
  likes?: number;
  links?: object;
  locations?: object;
  promoted_at?: string;
  slug?: string;
  sponsorship?: null | undefined | string;
  topic_submissions?: object;
  updated_at?: string;
  urls: {
    full: string;
    raw?: string;
    small?: string;
    small_s3?: string;
    regular?: string;
    thumb?: string;
  };
  user?: {
    id?: string;
    updated_at?: string;
  };
  views?: number;
  width: number;
};

export type PhotosType = PhotoType[];
