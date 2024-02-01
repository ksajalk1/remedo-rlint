import React, { ReactNode } from 'react';
import { findComponent } from '@remedoclinitech/staging.common.find-component';
import {
  Text,
  TextProps,
} from '@remedoclinitech/beta.atoms.text-component.text';
import {
  Image,
  ImageProps,
} from '@remedoclinitech/beta.atoms.image-component.image';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';

export type reviewCardProps = {
  type?: 'filled' | 'outline' | 'filledOutline' | 'unfilled';
  isShadow?: boolean;
  isRounded?: boolean;
  isProfile1?: boolean;
  isSubtitle1?: boolean;
  isProfile2?: boolean;
  isSubtitle2?: boolean;
  style?: React.CSSProperties;
  className?: string;
};
const defaultProps = {
  type: 'filled',
  isShadow: false,
  isRounded: false,
  isProfile1: false,
  isSubtitle1: false,
  isProfile2: false,
  isSubtitle2: false,
};

export type children = {
  '@remedoclinitech/beta.atoms.text-component.text': TextProps[];
  '@remedoclinitech/beta.atoms.image-component.image': ImageProps[];
};

export type ReviewCardProps = ComponentProps<reviewCardProps, children, never>;


const card_styles = {
  common: "flex min-w-10 max-w-13 px-3 py-4 flex-col justify-center items-center gap-2",
  prop: {
    getType: {
      filled: "bg-secondary-lighter",
      unfilled: "",
      outline: "border-2 border-grey-light",
      filledOutline: "border-2 border-grey-light bg-secondary-lighter",
    },
    rounded: {
      yes: "rounded-standard",
      no: "",
    },
    shadow: {
      yes: "shadow",
      no: "",
    },
  },
};


export function GetCSS({ type, isShadow, isRounded }: reviewCardProps) {
  let classNames = card_styles.common;
  classNames += " " + card_styles.prop.getType[type];
  classNames += " " + card_styles.prop.rounded[isRounded ? 'yes' : 'no'];
  classNames += " " + card_styles.prop.shadow[isShadow ? 'yes' : 'no'];
  return classNames.trim();
}


export function ReviewCard({ data, component }: ReviewCardProps) {
  if (!data || !data.cMap) {
    return null;
  }
  const cardClassNames = GetCSS({
    type: data.p.type,
    isShadow: data.p.isShadow,
    isRounded: data.p.isRounded,
  });
  return (
    <div
      id={`review-card-${component.id}`}
      className={`${ cardClassNames } ${ data.p.className || "" }`}
      style={data.p.style}
    >
      <div
        id="profile-picture"
        className='flex flex-col items-center gap-2'
      >
        {/* review.profile */}
        {/* <Image {...data.cMap['@remedoclinitech/beta.atoms.image-component.image'][0]}/> */}
        {data.p.isProfile1 && findComponent(
          Image,
          data.cMap['@remedoclinitech/beta.atoms.image-component.image'],
          'review.profile'
        )}
        <div
          id="profile-picure-text"
          className='flex flex-col justify-center items-center self-stretch'
        >
          {/* profile.name */}
          {findComponent(
            Text,
            data.cMap['@remedoclinitech/beta.atoms.text-component.text'],
            'card.reviewer.name.1'
          )}
          {/* profile.location */}
          {data.p.isSubtitle1 && findComponent(
            Text,
            data.cMap['@remedoclinitech/beta.atoms.text-component.text'],
            'card.reviewer.location'
          )}
        </div>
      </div>
      <div
        id="logo-star"
        className='flex justify-between items-center self-stretch'
      >
        {/* review.google */}
        {findComponent(
          Image,
          data.cMap['@remedoclinitech/beta.atoms.image-component.image'],
          'review.google'
        )}
        {/* review.rating */}
        {findComponent(
          Image,
          data.cMap['@remedoclinitech/beta.atoms.image-component.image'],
          'review.rating'
        )}
      </div>
      <div
        id="text-block"
        className='flex flex-col items-start self-stretch gap-4'
      >
        {/* text.block.paragraph */}
        {findComponent(
          Text,
          data.cMap['@remedoclinitech/beta.atoms.text-component.text'],
          'card.review'
        )}
        <div>
          {/* profile.name.footer */}
          {data.p.isProfile2 && findComponent(
            Text,
            data.cMap['@remedoclinitech/beta.atoms.text-component.text'],
            'card.reviewer.name.2'
          )}
          {/* profile.location.footer */}
          {data.p.isSubtitle2 && findComponent(
            Text,
            data.cMap['@remedoclinitech/beta.atoms.text-component.text'],
            'card.reviewer.location'
          )}
        </div>
      </div>
    </div>
  );
}
