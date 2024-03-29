/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    accordions: Accordion;
    'conversion-panels': ConversionPanel;
    'featured-media': FeaturedMedia;
    'feature-grids': FeatureGrid;
    heroes: Hero;
    'icon-tile-grids': IconTileGrid;
    processes: Process;
    specials: Special;
    switchbacks: Switchback;
    'text-grids': TextGrid;
    'tile-grids': TileGrid;
    'call-to-actions': CallToAction;
    'cta-tiles': CtaTile;
    'feature-tiles': FeatureTile;
    'icon-tiles': IconTile;
    icons: Icon;
    images: Image;
    videos: Video;
    users: User;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
}
export interface Page {
  id: string;
  title?: string;
  slug?: string;
  pageSections?: {
    internalName: string;
    blocks?: (
      | {
          accordion?: string | Accordion;
          id?: string;
          blockName?: string;
          blockType: 'accordionBlock';
        }
      | {
          conversionPanel?: string | ConversionPanel;
          id?: string;
          blockName?: string;
          blockType: 'conversionPanelBlock';
        }
      | {
          featuredMedia?: string | FeaturedMedia;
          id?: string;
          blockName?: string;
          blockType: 'featuredMediaBlock';
        }
      | {
          featureGrid?: string | FeatureGrid;
          id?: string;
          blockName?: string;
          blockType: 'featureGridBlock';
        }
      | {
          hero?: string | Hero;
          id?: string;
          blockName?: string;
          blockType: 'heroBlock';
        }
      | {
          iconTileGrid?: string | IconTileGrid;
          id?: string;
          blockName?: string;
          blockType: 'iconTileGridBlock';
        }
      | {
          process?: string | Process;
          id?: string;
          blockName?: string;
          blockType: 'processBlock';
        }
      | {
          special?: string | Special;
          id?: string;
          blockName?: string;
          blockType: 'specialBlock';
        }
      | {
          switchback?: string | Switchback;
          id?: string;
          blockName?: string;
          blockType: 'switchbackBlock';
        }
      | {
          textGrid?: string | TextGrid;
          id?: string;
          blockName?: string;
          blockType: 'textGridBlock';
        }
      | {
          tileGrid?: string | TileGrid;
          id?: string;
          blockName?: string;
          blockType: 'tileGridBlock';
        }
    )[];
    enableGrid?: boolean;
    gridColor?: 'purple' | 'green';
    enableShapes?: boolean;
    shapes?: {
      shape?: 'dots' | 'pluses';
      location?: 'top-left' | 'center-left' | 'bottom-left' | 'top-right' | 'center-right' | 'bottom-right';
      id?: string;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Accordion {
  id: string;
  heading: string;
  headingTag: string;
  accordionItems?: {
    heading?: string;
    headingTag?: string;
    content?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface ConversionPanel {
  id: string;
  heading: string;
  headingTag: string;
  content?: {
    [k: string]: unknown;
  }[];
  callToAction: string | CallToAction;
  updatedAt: string;
  createdAt: string;
}
export interface CallToAction {
  id: string;
  label?: string;
  linkType?: 'internal' | 'external';
  internalLink?: string | Page;
  externalLink?: string;
  color?: 'blue' | 'green' | 'white';
  fullTitle?: string;
  updatedAt: string;
  createdAt: string;
}
export interface FeaturedMedia {
  id: string;
  heading: string;
  headingTag: string;
  content?: {
    [k: string]: unknown;
  }[];
  assetType?: 'image' | 'video';
  image?: string | Image;
  video?: string | Video;
  callToAction?: string | CallToAction;
  updatedAt: string;
  createdAt: string;
}
export interface Image {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Video {
  id: string;
  internalName: string;
  url: string;
  placeholderImage: string | Image;
  updatedAt: string;
  createdAt: string;
}
export interface FeatureGrid {
  id: string;
  internalName: string;
  heading?: string;
  headingTag?: string;
  featureTiles: string[] | FeatureTile[];
  updatedAt: string;
  createdAt: string;
}
export interface FeatureTile {
  id: string;
  heading: string;
  headingTag: string;
  image: string | Image;
  content?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Hero {
  id: string;
  heading: string;
  headingTag: string;
  subheading?: string;
  content?: {
    [k: string]: unknown;
  }[];
  cta?: {
    type?: 'button' | 'tile';
    ctaButtons?: {
      callToAction?: string | CallToAction;
      id?: string;
    }[];
    ctaTiles?: {
      callToActionTile?: string | CtaTile;
      id?: string;
    }[];
  };
  updatedAt: string;
  createdAt: string;
}
export interface CtaTile {
  id: string;
  internalName: string;
  icon: string | Icon;
  label: string;
  linkType: 'internal' | 'external';
  internalLink: string | Page;
  externalLink: string;
  updatedAt: string;
  createdAt: string;
}
export interface Icon {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface IconTileGrid {
  id: string;
  heading: string;
  headingTag: string;
  content?: {
    [k: string]: unknown;
  }[];
  iconTiles: string[] | IconTile[];
  callToAction: string | CallToAction;
  updatedAt: string;
  createdAt: string;
}
export interface IconTile {
  id: string;
  label: string;
  icon: string | Icon;
  updatedAt: string;
  createdAt: string;
}
export interface Process {
  id: string;
  internalName: string;
  steps?: {
    heading: string;
    headingTag: string;
    content?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  callToAction: string | CallToAction;
  updatedAt: string;
  createdAt: string;
}
export interface Special {
  id: string;
  heading: string;
  headingTag: string;
  subheading?: string;
  content?: {
    [k: string]: unknown;
  }[];
  sideBox?: {
    [k: string]: unknown;
  }[];
  textGrid: string | TextGrid;
  updatedAt: string;
  createdAt: string;
}
export interface TextGrid {
  id: string;
  internalName: string;
  heading?: string;
  headingTag?: string;
  content?: {
    [k: string]: unknown;
  }[];
  textTiles?: {
    text?: string;
    id?: string;
  }[];
  callToAction?: string | CallToAction;
  updatedAt: string;
  createdAt: string;
}
export interface Switchback {
  id: string;
  internalName: string;
  image: string | Image;
  imageSide: 'left' | 'right';
  heading?: string;
  headingTag?: string;
  content?: {
    [k: string]: unknown;
  }[];
  callToAction?: string | CallToAction;
  updatedAt: string;
  createdAt: string;
}
export interface TileGrid {
  id: string;
  heading: string;
  headingTag: string;
  content?: {
    [k: string]: unknown;
  }[];
  tiles?: {
    heading?: string;
    headingTag?: string;
    content?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  callToAction?: string | CallToAction;
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Header {
  id: string;
  menuItems?: {
    label?: string;
    linkType?: 'internal' | 'external' | 'submenu';
    internalLink?: string | Page;
    externalLink?: string;
    overridePageName?: boolean;
    internalCustomLabel?: string;
    submenuItems?: {
      label?: string;
      linkType?: 'internal' | 'external';
      internalLink?: string | Page;
      externalLink?: string;
      overridePageName?: boolean;
      internalCustomLabel?: string;
      id?: string;
    }[];
    id?: string;
  }[];
  callToAction?: string | CallToAction;
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  socialLinks?: {
    icon: string | Icon;
    url: string;
    id?: string;
  }[];
  menuItems?: {
    label?: string;
    linkType?: 'internal' | 'external' | 'submenu';
    internalLink?: string | Page;
    externalLink?: string;
    overridePageName?: boolean;
    internalCustomLabel?: string;
    submenuItems?: {
      label?: string;
      linkType?: 'internal' | 'external';
      internalLink?: string | Page;
      externalLink?: string;
      overridePageName?: boolean;
      internalCustomLabel?: string;
      id?: string;
    }[];
    id?: string;
  }[];
  copyrightText?: string;
  updatedAt?: string;
  createdAt?: string;
}
