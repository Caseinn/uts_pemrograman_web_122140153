import React from "react";
import {
  skeletonRecipeContainer,
  skeletonTitle,
  skeletonImageDetail,
  skeletonInfoContainer,
  skeletonLineHalf,
  skeletonLineThird,
  skeletonSectionHeader,
  skeletonFullLine,
  skeletonListSpacing,
} from "../styles/tailwindClasses";

const SkeletonRecipeDetail = () => (
  <div className={skeletonRecipeContainer}>
    <div className={skeletonTitle} />
    <div className={skeletonImageDetail} />
    <div className={`${skeletonInfoContainer} mb-4`}>
      <div className={skeletonLineHalf} />
      <div className={skeletonLineThird} />
    </div>
    <div className={skeletonSectionHeader} />
    <div className={`${skeletonInfoContainer} mb-4`}>
      <div className={skeletonLineHalf} />
      <div className={skeletonLineHalf} />
      <div className={skeletonLineHalf} />
      <div className={skeletonLineHalf} />
    </div>
    <div className={skeletonSectionHeader} />
    <ul className={skeletonListSpacing}>
      <li className={skeletonFullLine} />
      <li className={skeletonFullLine} />
      <li className={skeletonFullLine} />
    </ul>
    <div className={skeletonSectionHeader} />
    <div className={`${skeletonInfoContainer} mb-4`}>
      <div className={skeletonFullLine} />
      <div className={skeletonFullLine} />
      <div className={skeletonFullLine} />
    </div>
    <div className={skeletonLineThird} />
  </div>
);

export default SkeletonRecipeDetail;
