import classNames from 'classnames'
import React, { useState } from 'react'
import { animated as a } from 'react-spring'
import { defaultColors } from './defaultColors'

import styles from './GugisHead.module.scss'

const GugisHead = ({
  pupilInterp,
  partColors = defaultColors,
  handleColorChange,
  className,
  ...props
}) => {
  const [isWide, setWide] = useState(false)

  return (
    <svg
      className={classNames(styles.GugisHead, className)}
      viewBox="0 0 1500 1500"
      {...props}
    >
      <style>
        {
          '.head__st4{fill:none}.head__st4,.stroke{stroke:#000;stroke-width:17.1304;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
        }
      </style>
      <g id="head__EARS">
        <g onClick={() => handleColorChange('ear1')}>
          <path
            fill={partColors.ear1}
            d="M306.1 777.5c17 96 31 188.6 41.5 277.4-9.9 33.9-65 33.9-72.1-9.2.2-83.3-32.7-126.2-54.2-210.7-19.2-78.5 40.6-117 84.7-58l.1.5z"
          />
          <path
            className="head__st4"
            d="M306.1 777.5c17 96 31 188.6 41.5 277.4.2 1.4.3 2.8.5 4.2"
          />
          <path
            className="head__st4"
            d="M306.1 777.5l-.1-.5c-44.1-59-103.9-20.6-84.7 58 21.5 84.6 54.4 127.4 54.2 210.7 7.1 43.1 62.2 43.1 72.1 9.2"
          />
        </g>
        <g onClick={() => handleColorChange('ear2')}>
          <path
            fill={partColors.ear2}
            d="M1194 777c44.1-59 103.9-20.6 84.7 58-21.5 84.6-54.4 127.4-54.2 210.7-7.1 43.1-62.2 43.1-72.1 9.2 10.5-88.8 24.5-181.4 41.5-277.4l.1-.5z"
          />
          <path
            className="head__st4"
            d="M1193.9 777.5c-17 96-31 188.6-41.5 277.4-.2 1.4-.3 2.8-.5 4.2"
          />
          <path
            className="head__st4"
            d="M1193.9 777.5l.1-.5c44.1-59 103.9-20.6 84.7 58-21.5 84.6-54.4 127.4-54.2 210.7-7.1 43.1-62.2 43.1-72.1 9.2"
          />
        </g>
      </g>

      <g id="head__HEAD">
        <g onClick={() => handleColorChange('head')}>
          <path
            d="M1204.1 307.6c26 55.5 30.6 116.3 30.3 176.9-.2 64.5-8.3 128.7-19.9 192-6.2 33.7-13.3 67.1-21.1 100.5-22.3 125.8-40.7 252.3-52.3 379.6-2.3 25.1-1.6 50.8-7.9 75.4-6.1 23.5-19.8 41.2-37.3 57.4-36.2 33.8-77.9 61-117.3 90.7-20.2 15.2-40.3 31.1-58 49.1-43.1 43.9-114.1 40.1-170.6 40.1s-127.5 3.8-170.6-40.1c-17.7-18-37.9-33.9-58-49.1-39.4-29.8-81.1-57-117.3-90.7-17.5-16.3-31.2-33.9-37.3-57.4-6.3-24.6-5.6-50.3-7.9-75.4-11.6-127.2-30-253.8-52.3-379.6-7.8-33.3-14.9-66.8-21.1-100.5-11.6-63.3-19.7-127.6-19.9-192-.2-60.7 4.3-121.4 30.3-176.9C328.5 238 377.7 175.9 439 129.5c89-67.3 201.1-94 311-99 109.9 5 222 31.7 311 99 61.3 46.4 110.5 108.5 143.1 178.1z"
            fill={partColors.head}
          />
          <path
            className="head__st4"
            d="M750 30.5c-109.9 5-222 31.7-311 99-61.3 46.4-110.5 108.5-143.2 178.1-26 55.5-30.6 116.3-30.3 176.9.2 64.5 8.3 128.7 19.9 192 6.2 33.7 13.4 67.1 21.1 100.5 22.3 125.8 40.7 252.3 52.3 379.6 2.3 25.1 1.6 50.8 7.9 75.4 6.1 23.5 19.8 41.2 37.3 57.4 36.2 33.8 77.9 61 117.3 90.7 20.2 15.2 40.3 31.1 58 49.1 43.1 43.9 114.1 40.1 170.6 40.1M750 30.5c109.9 5 222 31.7 311 99 61.3 46.4 110.5 108.5 143.2 178.1 26 55.5 30.6 116.3 30.3 176.9-.2 64.5-8.3 128.7-19.9 192-6.2 33.7-13.3 67.1-21.1 100.5-22.3 125.8-40.7 252.3-52.3 379.6-2.3 25.1-1.6 50.8-7.9 75.4-6.1 23.5-19.8 41.2-37.3 57.4-36.2 33.8-77.9 61-117.3 90.7-20.2 15.2-40.3 31.1-58 49.1-43.1 43.9-114.1 40.1-170.6 40.1"
          />
        </g>
      </g>
      <g id="head__NOSE_MIDDLE" onClick={() => handleColorChange('nose')}>
        <g>
          <path
            fill={partColors.nose}
            d="M817.8 957.7c28.9 52.2 32.3 84.5 24.4 104.6-16.6-13.1-69.2-14.4-68.9 36.8-7.3 7.1-18 8.9-23.3 9.4-5.3-.4-16-2.2-23.3-9.4.3-51.1-52.3-49.9-68.9-36.8-7.9-20.1-4.5-52.4 24.4-104.6 2.3-4.2 3.1-10.3 3.9-15 1-5.4 1.7-10.9 2.1-16.5.9-11.9.6-23.8-.1-35.7-1.6-25.7-5.5-51.1-8.2-76.7-2.5-24-4.4-48.7-.7-72.7 3.3-21.2 11.9-41.5 28.6-55.6 6.9-5.9 15.6-10.8 23.9-14.4 32.9-14.1 69.3 15 81.9 44.5 1.3 3 2.4 6.1 3.4 9.3 7.6 25.4 6.3 52.8 3.9 78.9-2.6 28.7-7.3 57.2-9.1 86-1.4 22.6-1.5 46.3 6 67.9z"
          />
          <path d="M842.2 1062.3l-68.9 36.8c-.3-51.2 52.3-49.9 68.9-36.8z" />
          <path d="M773.3 1099.1l68.9-36.8c-13.1 33.1-56.9 33.6-68.9 36.8z" />
          <path d="M753.1 1108.6h-6.2c.4 0 1.5 0 3.1-.2 1.5.2 2.6.2 3.1.2z" />
          <path d="M657.8 1062.3c16.6-13.1 69.2-14.4 68.9 36.8l-68.9-36.8z" />
          <path d="M657.8 1062.3l68.9 36.8c-12-3.2-55.8-3.7-68.9-36.8z" />
          <g>
            <path
              className="head__st4"
              d="M746.7 1108.6H753.3M753.1 1108.6c-.4 0-1.5 0-3.1-.2-5.3-.4-16-2.2-23.3-9.4-12-3.2-55.8-3.7-68.9-36.8-7.9-20.1-4.5-52.4 24.4-104.6 2.3-4.2 3.1-10.3 3.9-15 1-5.4 1.7-10.9 2.1-16.5.9-11.9.6-23.8-.1-35.7-1.6-25.7-5.5-51.1-8.2-76.7-2.5-24-4.4-48.7-.7-72.7 3.3-21.2 11.9-41.5 28.6-55.6 6.9-5.9 15.6-10.8 23.9-14.4 32.9-14.1 69.3 15 81.9 44.5 1.3 3 2.4 6.1 3.4 9.3 7.6 25.4 6.3 52.8 3.9 78.9-2.6 28.7-7.3 57.2-9.1 86-1.5 22.5-1.6 46.2 5.9 67.8 28.9 52.2 32.3 84.5 24.4 104.6-13.1 33.1-56.9 33.6-68.9 36.8-7.3 7.1-18 8.9-23.3 9.4-1.6.1-2.7.2-3.1.2"
            />
            <path
              className="head__st4"
              d="M726.7 1099.1c.3-51.1-52.3-49.9-68.9-36.8l68.9 36.8zM773.3 1099.1c-.3-51.1 52.3-49.9 68.9-36.8l-68.9 36.8z"
            />
          </g>
        </g>
      </g>
      <g id="head__HEART_NOSE">
        <g id="head__XMLID_24_" onClick={() => handleColorChange('noseMid')}>
          <path
            fill={partColors.noseMid}
            d="M803.2 946.6c7.4 7.9 9 19.5 8.4 29.9-1.1 17.7-8.2 35.2-18.3 49.6-9.3 13.3-22.5 25.7-38.5 28.1-4 .6-8.1.6-12.4-.2-11.5-2.1-21-10.5-28.6-18.9-11.8-13.2-20.2-29.9-23.8-47.2-2.8-13.5-3.3-30.6 6.8-41.4 3.5-2.8 7.2-5.4 11.3-7.3 7.7-3.5 15.8-3.6 22.9 1.2 3.8 2.5 7 5.8 10.1 9.2 2.2 2.4 4.6 6.8 8.2 7.3 3.5.5 6.3-3.6 8.4-5.8 5.2-5.5 10.4-11.7 18-13.8 10.1-2.7 20 3.2 27.5 9.3z"
          />
          <path
            className="head__st4"
            d="M754.8 1054.3c16-2.4 29.3-14.8 38.5-28.1 10.1-14.4 17.2-31.9 18.3-49.6.6-10.4-1-22-8.4-29.9-7.5-6.1-17.4-12.1-27.5-9.3-7.6 2.1-12.8 8.3-18 13.8-2.1 2.2-4.9 6.3-8.4 5.8s-6-4.9-8.2-7.3c-3.1-3.3-6.3-6.6-10.1-9.2-7.1-4.8-15.2-4.7-22.9-1.2-4.1 1.9-7.8 4.5-11.3 7.3-10.1 10.8-9.7 27.9-6.8 41.4 3.6 17.3 12 34 23.8 47.2 7.5 8.4 17.1 16.8 28.6 18.9 4.3.8 8.4.8 12.4.2z"
          />
        </g>
      </g>
      <g id="head__RIGHT_EYE_CONTUR" onClick={() => handleColorChange('eyeR')}>
        <g>
          <path
            fill={partColors.eyeR}
            d="M852.8 818c74.7-73.5 150.3-78.7 227.3-13.3-63.4 52-140.1 52.5-227.3 13.3z"
          />
          <path
            className="head__st4"
            d="M852.8 818c74.7-73.5 150.3-78.7 227.3-13.3-63.4 52-140.1 52.5-227.3 13.3z"
          />
        </g>
      </g>
      <g id="head__LEFT_EYE_CONTUR" onClick={() => handleColorChange('eyeL')}>
        <g>
          <path
            fill={partColors.eyeL}
            d="M648.3 818c-87.1 39.2-163.9 38.6-227.3-13.3 77-65.4 152.6-60.2 227.3 13.3z"
          />
          <path
            className="head__st4"
            d="M648.3 818C573.6 744.5 498 739.3 421 804.8c63.3 51.9 140.1 52.4 227.3 13.2z"
          />
        </g>
      </g>
      <circle
        className="stroke"
        cx={521.7}
        cy={802.9}
        r={50.7}
        fill={partColors.eyeLCirc}
        onClick={() => handleColorChange('eyeLCirc')}
      />
      <circle
        className="stroke"
        cx={978.2}
        cy={800.7}
        r={50.7}
        fill={partColors.eyeRCirc}
        onClick={() => handleColorChange('eyeRCirc')}
      />
      <a.circle
        cx={521.7}
        cy={802.9}
        r={isWide ? 20 : 15}
        onClick={() => setWide(!isWide)}
        transform={pupilInterp}
        className={classNames('stroke', styles.eye)}
        id="head__RIGHT_EYE_PUPIL"
      />
      <a.circle
        cx={978.2}
        cy={802.4}
        onClick={() => setWide(!isWide)}
        r={isWide ? 20 : 15}
        transform={pupilInterp}
        className={classNames('stroke', styles.eye)}
        id="head__RGHT_EYE_PUPIL"
      />
      <g id="head__TOP_SECOND_RIGHT_EYE">
        <g id="head__XMLID_41_">
          <path
            fill={partColors.eyeRTop2}
            onClick={() => handleColorChange('eyeRTop2')}
            d="M1080.1 805c-77-65.5-152.6-60.3-227.3 13.3-46.3-68.5 198.1-172.9 227.3-13.3z"
          />
          <path
            className="head__st4"
            d="M852.8 818.3c74.7-73.5 150.3-78.7 227.3-13.3M852.8 818.3c-46.3-68.5 198.1-172.9 227.3-13.3v-.1"
          />
        </g>
      </g>
      <g id="head__TOP_SECOND_LEFT_EYE">
        <g id="head__XMLID_12_">
          <path
            fill={partColors.eyeLTop2}
            onClick={() => handleColorChange('eyeLTop2')}
            d="M421.5 805c29.2-159.6 273.6-55.2 227.3 13.3-74.8-73.5-150.4-78.7-227.3-13.3z"
          />
          <path
            className="head__st4"
            d="M648.8 818.3C574 744.8 498.4 739.6 421.5 805M648.8 818.3C695 749.8 450.7 645.4 421.5 805v-.1"
          />
        </g>
      </g>
      <g id="head__TOP_RIGHT_EYE">
        <g id="head__XMLID_39_">
          <path
            fill={partColors.eyeRTop}
            onClick={() => handleColorChange('eyeRTop')}
            d="M1042.4 620.1c91.4 13.9 115.3 139.3 37.2 184.7-29.2-159.6-273.6-55.2-227.3 13.3-106.1-148.7 88.9-213.4 190.1-198z"
          />
          <path
            className="head__st4"
            d="M1079.6 804.8c78.1-45.4 54.2-170.8-37.2-184.7-101.2-15.4-296.2 49.3-190.1 198-46.3-68.5 198.1-172.9 227.3-13.3"
          />
        </g>
      </g>
      <path
        className="stroke"
        d="M420.4 804.9c-78.1-45.4-54.2-170.8 37.2-184.7 101.2-15.4 296.2 49.3 190.1 198 46.2-68.5-198.1-172.9-227.3-13.3"
        id="head__TOP_LEFT_EYE"
        fill={partColors.eyeLTop}
        onClick={() => handleColorChange('eyeLTop')}
      />
      <g id="head__BOTTOM_RIGHT_EYE">
        <g id="head__XMLID_4_">
          <path
            fill={partColors.eyeRBot}
            onClick={() => handleColorChange('eyeRBot')}
            d="M1079.5 805.1c26.2 168.5-243.1 151.1-227.3 13.3 87.2 39.1 164 38.6 227.3-13.3z"
          />
          <path
            className="head__st4"
            d="M1079.5 805.1c-63.4 51.9-140.1 52.5-227.3 13.3M1079.5 805.1c26.2 168.5-243.1 151.1-227.3 13.3"
          />
        </g>
      </g>
      <g id="head__BOTTOM_LEFT_EYE">
        <g id="head__XMLID_5_">
          <path
            fill={partColors.eyeLBot}
            onClick={() => handleColorChange('eyeLBot')}
            d="M421 805.1c-26.2 168.5 243.1 151 227.3 13.3-87.2 39.1-164 38.6-227.3-13.3z"
          />
          <path
            className="head__st4"
            d="M421 805.1c63.4 51.9 140.1 52.4 227.3 13.3M421 805.1c-26.2 168.5 243.1 151 227.3 13.3"
          />
        </g>
      </g>
      <g id="head__LEFT__NOSE_PART">
        <g id="head__XMLID_35_">
          <path
            fill={partColors.noseL}
            onClick={() => handleColorChange('noseL')}
            d="M686.5 726.9c35.5-3.8 34.1 198.8 11.4 181.6-36.4-13.1-33.2-178.1-11.4-181.6z"
          />
          <path
            className="head__st4"
            d="M698 908.5c-36.4-13-33.3-178.1-11.4-181.6 35.5-3.8 34 198.7 11.4 181.6z"
          />
        </g>
      </g>
      <g id="head__RIGHT_NOSE_PART">
        <g id="head__XMLID_6_">
          <path
            fill={partColors.noseR}
            onClick={() => handleColorChange('noseR')}
            d="M813.4 729.2c21.9 3.5 25 168.6-11.4 181.6-22.6 17.2-24.1-185.4 11.4-181.6z"
          />
          <path
            className="head__st4"
            d="M802 910.9c36.4-13.1 33.3-178.1 11.4-181.6-35.5-3.9-34 198.7-11.4 181.6z"
          />
        </g>
      </g>
      <g id="head__LEFT_CIRCLE" onClick={() => handleColorChange('circL')}>
        <g id="head__XMLID_32_">
          <circle fill={partColors.circL} cx={578.8} cy={983.4} r={40.8} />
          <circle className="head__st4" cx={578.8} cy={983.4} r={40.8} />
        </g>
      </g>
      <g id="head__RIGHT_CIRCLE" onClick={() => handleColorChange('circR')}>
        <g id="head__XMLID_17_">
          <path
            fill={partColors.circR}
            d="M921.2 942.5c22.5 0 40.8 18.2 40.8 40.8 0 22.5-18.3 40.8-40.8 40.8-22.5 0-40.8-18.3-40.8-40.8 0-22.5 18.3-40.8 40.8-40.8z"
          />
          <path
            className="head__st4"
            d="M961.9 983.3c0 22.5-18.3 40.8-40.8 40.8-22.5 0-40.8-18.3-40.8-40.8 0-22.5 18.2-40.8 40.8-40.8 22.6 0 40.8 18.3 40.8 40.8z"
          />
        </g>
      </g>
      <g id="head__RIGHT_CHEAK" onClick={() => handleColorChange('cheekR')}>
        <g id="head__XMLID_29_">
          <path
            fill={partColors.cheekR}
            d="M1105.6 880.1c6.4-34.1 37.8-29.8 37.8 6.1-39.2 406.5-97.6 371.2-154.6 432.1-54.3 48.1-67 29.6-82.1 14.9-21.8-45.5 82.1-76.7 45.7-251.2-.1-77.2 135.9-102.8 153.2-201.9z"
          />
          <path
            className="head__st4"
            d="M1105.6 880.1c6.4-34.1 37.8-29.8 37.8 6.1-39.2 406.5-97.6 371.2-154.6 432.1-54.3 48.1-67 29.6-82.1 14.9-21.8-45.5 82.1-76.7 45.7-251.2-.1-77.2 135.9-102.8 153.2-201.9z"
          />
        </g>
      </g>
      <g id="head__LEFT_CHEAK" onClick={() => handleColorChange('cheekL')}>
        <g id="head__XMLID_19_">
          <path
            fill={partColors.cheekL}
            d="M547.6 1082c-36.5 174.6 67.4 205.8 45.7 251.2-15.1 14.7-27.8 33.2-82.1-14.9-57-61-115.5-25.7-154.6-432.1 0-35.9 31.4-40.1 37.8-6.1 17.2 99.1 153.2 124.7 153.2 201.9z"
          />
          <path
            className="head__st4"
            d="M394.3 880.1c-6.4-34.1-37.8-29.8-37.8 6.1 39.2 406.5 97.6 371.2 154.6 432.1 54.3 48.1 67 29.6 82.1 14.9 21.8-45.5-82.1-76.7-45.7-251.2.1-77.2-135.9-102.8-153.2-201.9z"
          />
        </g>
      </g>
      <g id="head__BOTTOM_CIRCLE" onClick={() => handleColorChange('circBot')}>
        <g id="head__XMLID_26_">
          <path
            fill={partColors.circBot}
            d="M851.7 1300.3c40.6 56.4 22.7 87.5-5.2 109-35.2 13.6-70.2-6.7-96.9-4.7-26.6-1.9-61.6 18.4-96.9 4.7-27.9-21.5-45.8-52.6-5.2-109 23.7-24.6 56.3-29.2 102.1-29.7 45.8.5 78.5 5.1 102.1 29.7z"
          />
          <path
            className="head__st4"
            d="M753.7 1270.6h-4c-45.8.5-78.4 5.1-102.1 29.7-40.6 56.4-22.7 87.5 5.2 109 35.2 13.6 70.2-6.7 96.9-4.7.5 0 1.1.1 1.6.1"
          />
          <path
            className="head__st4"
            d="M745.7 1270.6h4c45.8.5 78.4 5.1 102.1 29.7 40.6 56.4 22.7 87.5-5.2 109-35.2 13.6-70.2-6.7-96.9-4.7-.5 0-1.1.1-1.6.1"
          />
        </g>
      </g>
      <g id="head__BOTTOM_LIPS" onClick={() => handleColorChange('lipsBot')}>
        <g id="head__XMLID_22_">
          <path
            fill={partColors.lipsBot}
            d="M899.2 1228.5c-11.9 7.3-23.5 15-35 23-14.2 9.8-28.1 20-42.4 29.7-11.3 7.6-23 15-35.7 20.3-10.5 4.4-22 6.4-33.5 6.9-4.6.2-9.3.1-13.9-.1-20.7-1.2-39.7-8.3-57.3-19.2-13.6-8.4-26.5-17.8-39.5-27-7.8-5.5-15.6-10.9-23.5-16.3-4.3-2.9-8.6-5.8-13-8.6-2.3-1.5-4.6-2.9-6.8-4.4-1.2-.8-2.4-1.5-3.7-2.3-.8-.5-2.3-1.9-3.2-2 2.8.2 5.6.5 8.4.7 21.4 1.8 42.9 3.4 64.3 4.7 18.5 1.1 37.1 2.1 55.7 2.3 15.6.2 31.3-.2 47-.2 22.3-.1 44.6-1.1 66.9-2.6 21.8-1.4 43.5-3.1 65.2-4.9z"
          />
          <path
            className="head__st4"
            d="M752.6 1308.3c11.5-.5 23-2.5 33.5-6.9 12.7-5.3 24.3-12.7 35.7-20.3 14.3-9.6 28.2-19.9 42.4-29.7 11.5-7.9 23.1-15.6 35-23-21.7 1.8-43.4 3.5-65.1 4.9-22.3 1.4-44.5 2.5-66.9 2.6-15.7 0-31.3.4-47 .2-18.6-.2-37.1-1.2-55.7-2.3-21.5-1.3-42.9-3-64.3-4.7-2.8-.2-5.6-.5-8.4-.7.9.1 2.4 1.5 3.2 2 1.2.8 2.4 1.5 3.7 2.3 2.3 1.5 4.6 2.9 6.8 4.4 4.4 2.8 8.7 5.7 13 8.6 7.9 5.3 15.7 10.8 23.5 16.3 13 9.2 25.9 18.6 39.5 27 17.5 10.8 36.6 18 57.3 19.2 4.5.3 9.1.3 13.8.1z"
          />
        </g>
      </g>
      <g id="head__TOP_LIPS" onClick={() => handleColorChange('lipsTop')}>
        <g id="head__XMLID_20_">
          <path
            fill={partColors.lipsTop}
            d="M750 1234.4c-37.3 1.4-93.4-2.4-153.7-7.5l114.7-78.6c14.3 15.2 20.4 27.2 35 29.2h7.4c14.6-2 20.7-14 35-29.2l114.7 78.6c-60.1 5-115.9 8.9-153.1 7.5z"
          />
          <path
            className="head__st4"
            d="M596.3 1226.9c60.3 5 116.4 8.9 153.7 7.5 1.2 0 2.3-.1 3.4-.1M596.3 1226.9l114.7-78.6c14.3 15.2 20.4 27.2 35 29.2h7.4c14.6-2 20.7-14 35-29.2l114.7 78.6"
          />
          <path
            className="head__st4"
            d="M903.6 1226.9h-.6c-60.1 5-115.9 8.8-153.1 7.4-1.2 0-2.3-.1-3.4-.1"
          />
        </g>
      </g>
      <g
        id="head__HEAD_MIDDLE_SMALL_CIRCLE"
        onClick={() => handleColorChange('circSmallM')}
      >
        <g id="head__XMLID_10_">
          <path
            fill={partColors.circSmallM}
            d="M750 619.3c-19.2.4-40.4 1.6-59.2 3.7-16.2 1.8-37.4 2.3-50.6-8.8-3.5-3-6.3-6.7-8.7-10.6-11.8-18.6-16.8-42-10.8-63.2 16.3-57.3 84.1-45.7 129.3-43 45.2-2.7 113-14.2 129.3 43 6 21.2 1 44.6-10.8 63.2-2.4 3.9-5.2 7.6-8.7 10.6-13.2 11.2-34.4 10.6-50.6 8.8-18.8-2.1-40-3.3-59.2-3.7z"
          />
          <path
            className="head__st4"
            d="M750 497.4c-45.2-2.7-113-14.2-129.3 43-6 21.2-1 44.6 10.8 63.2 2.4 3.9 5.2 7.6 8.7 10.6 13.2 11.2 34.4 10.6 50.6 8.8 18.8-2.1 40-3.3 59.2-3.7 1 0 2 0 3-.1"
          />
          <path
            className="head__st4"
            d="M750 497.4c45.2-2.7 113.1-14.2 129.3 43 6 21.2 1 44.6-10.8 63.2-2.4 3.9-5.2 7.6-8.7 10.6-13.2 11.2-34.4 10.6-50.6 8.8-18.8-2.1-40-3.3-59.2-3.7-1 0-2 0-3-.1"
          />
        </g>
      </g>
      <g
        id="head__HEAD_RIGHT_SMALL_CIRCLE"
        onClick={() => handleColorChange('circRSmallT')}
      >
        <g id="head__XMLID_3_">
          <path
            fill={partColors.circRSmallT}
            d="M1023.6 520.5c53.2-4.7 83.8 72.5 21.5 77.9-91.4-4.9-100.9 2.6-114.8-20.9-4-23.4 9.7-48.1 93.3-57z"
          />
          <path
            className="head__st4"
            d="M1023.6 520.5c53.2-4.7 83.8 72.5 21.5 77.9-91.4-4.9-100.9 2.6-114.8-20.9-4-23.4 9.7-48.1 93.3-57z"
          />
        </g>
      </g>
      <path
        d="M476.4 521.3c-53.2-4.7-83.8 72.5-21.5 77.9 91.4-4.9 100.9 2.5 114.8-20.9 3.9-23.4-9.7-48-93.3-57z"
        className="stroke"
        id="head__HEAD_LEFT_SMALL_CIRCLE"
        fill={partColors.circLSmallT}
        onClick={() => handleColorChange('circLSmallT')}
      />
      <g
        id="head__HEAD_TOP_CIRCLE"
        onClick={() => handleColorChange('circTop')}
      >
        <g id="head__XMLID_1_">
          <path
            fill={partColors.circTop}
            d="M1085.8 218.3c31.7 36.1 43.3 86.6 40.5 133.6-2.7 44.5-18.8 99.7-57.9 125.6-33.9 22.5-77.8 17.1-115.3 8.1-35.1-8.4-69.3-18.6-105.2-23.2-33.4-4.3-67.2-4.8-100.8-3.1-33.6-1.7-67.4-1.2-100.8 3.1-35.9 4.6-70.2 14.8-105.2 23.2-37.6 9-81.5 14.4-115.3-8.1-39.1-26-55.2-81.2-57.9-125.6-2.8-47 8.8-97.5 40.5-133.6 18.5-21.1 43.3-30.1 68.9-39.4 28.3-10.3 57.5-18.2 87-24 60.2-11.8 121.6-15 182.8-15.7 61.2.7 122.7 3.9 182.8 15.7 29.6 5.8 58.7 13.7 87 24 25.5 9.3 50.4 18.4 68.9 39.4z"
          />
          <path
            className="head__st4"
            d="M746.9 139.2c-61.2.7-122.7 3.9-182.8 15.7-29.6 5.8-58.7 13.7-87 24-25.6 9.3-50.4 18.4-68.9 39.4-31.7 36.1-43.3 86.6-40.5 133.6 2.7 44.5 18.8 99.7 57.9 125.6 33.9 22.5 77.8 17.1 115.3 8.1 35-8.4 69.3-18.6 105.2-23.2 33.4-4.3 67.2-4.8 100.8-3.1M746.9 139.2c.1 0 .1 0 0 0 61.2.7 122.7 3.9 182.9 15.7 29.6 5.8 58.7 13.7 87 24 25.6 9.3 50.4 18.4 68.9 39.4 31.7 36.1 43.3 86.6 40.5 133.6-2.7 44.5-18.8 99.7-57.9 125.6-33.9 22.5-77.8 17.1-115.3 8.1-35.1-8.4-69.3-18.6-105.2-23.2-33.4-4.3-67.2-4.8-100.8-3.1"
          />
        </g>
      </g>
    </svg>
  )
}

export default GugisHead
