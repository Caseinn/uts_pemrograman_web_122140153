// src/components/SkeletonRecipeDetail.js
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
  skeletonListSpacing
} from "../styles/tailwindClasses";

const SkeletonRecipeDetail = () => (
  <div className={skeletonRecipeContainer}>
    <div className={skeletonTitle}></div>
    <div className={skeletonImageDetail}></div>
    <div className={`${skeletonInfoContainer} mb-4`}>
      <div className={skeletonLineHalf}></div>
      <div className={skeletonLineThird}></div>
    </div>
    <div className={skeletonSectionHeader}></div>
    <div className={`${skeletonInfoContainer} mb-4`}>
      <div className={skeletonLineHalf}></div>
      <div className={skeletonLineHalf}></div>
      <div className={skeletonLineHalf}></div>
      <div className={skeletonLineHalf}></div>
    </div>
    <div className={skeletonSectionHeader}></div>
    <ul className={skeletonListSpacing}>
      <li className={skeletonFullLine}></li>
      <li className={skeletonFullLine}></li>
      <li className={skeletonFullLine}></li>
    </ul>
    <div className={skeletonSectionHeader}></div>
    <div className={`${skeletonInfoContainer} mb-4`}>
      <div className={skeletonFullLine}></div>
      <div className={skeletonFullLine}></div>
      <div className={skeletonFullLine}></div>
    </div>
    <div className={skeletonLineThird}></div>
  </div>
);

export default SkeletonRecipeDetail;
