import React from 'react';

import styles from './index.less';

export default function Contents() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          Cơm Tỏi Xối Basic
        </p>
      </div>
      <div className={styles.count}>
        <p>45.000đ</p>
        <span>50.000đ</span>
      </div>
      <div className={styles.sale}>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
          <path d="M16.9526 0H12.5562C11.591 0 10.3003 0.534607 9.618 1.21707L0.597809 10.2371C0.212219 10.6226 0 11.1366 0 11.6847C0 12.2328 0.212364 12.7468 0.597809 13.1322L5.86763 18.4022C6.25307 18.7876 6.7671 19 7.31519 19C7.86313 19 8.3773 18.7876 8.76289 18.4022L17.7829 9.382C18.4654 8.69968 19 7.40897 19 6.44384V2.0471C18.9999 0.918312 18.0814 0 16.9526 0ZM17.8867 6.44384C17.8867 7.11514 17.4704 8.12029 16.9958 8.59488L7.97562 17.6149C7.80036 17.7902 7.56582 17.8867 7.31519 17.8867C7.06455 17.8867 6.83015 17.7902 6.6549 17.6151L1.38508 12.345C1.20982 12.1697 1.11328 11.9352 1.11328 11.6847C1.11328 11.434 1.20968 11.1995 1.38493 11.0244L10.4051 2.0042C10.8797 1.5296 11.8849 1.11328 12.5562 1.11328H16.9526C17.4676 1.11328 17.8866 1.53221 17.8867 2.0471V6.44384Z" fill="#FF7F23"/>
          <path d="M5.16957 12.3014C4.9672 12.0992 5.01779 11.8041 5.32119 11.5004C5.67547 11.1463 5.93263 11.2095 6.06338 11.0789C6.21515 10.9271 6.0886 10.6656 5.99162 10.5688C5.7133 10.2904 5.10202 10.7837 4.85327 11.0325C4.36838 11.5174 4.04382 12.272 4.67192 12.9003C5.67112 13.8995 6.83064 12.3522 7.4631 12.9846C7.71605 13.2376 7.61066 13.5706 7.35771 13.8237C6.92762 14.2536 6.48912 14.0428 6.31633 14.2156C6.18558 14.3464 6.25313 14.6331 6.37113 14.7512C6.61567 14.9958 7.31553 14.8524 7.86782 14.3C8.44968 13.7183 8.55927 12.9845 7.95639 12.3816C6.86442 11.2898 5.69229 12.8245 5.16957 12.3014Z" fill="#FF7F23"/>
          <path d="M11.0637 10.4888L7.59785 8.65055C7.43347 8.56198 7.21835 8.65895 7.05817 8.81928C6.9022 8.97511 6.80522 9.19023 6.89379 9.35475L8.73201 12.8204C8.74462 12.8414 8.75737 12.8624 8.76578 12.871C8.90074 13.0058 9.19167 12.9004 9.33909 12.7529C9.43186 12.6602 9.47419 12.5589 9.41505 12.4577L9.01453 11.7369L9.9801 10.7713L10.701 11.1719C10.8023 11.2308 10.9033 11.1888 10.9961 11.096C11.1437 10.9484 11.2449 10.6531 11.1141 10.5225C11.1016 10.5099 11.0847 10.5014 11.0637 10.4888ZM8.69837 11.193L7.77079 9.5316L9.43201 10.4593L8.69837 11.193Z" fill="#FF7F23"/>
          <path d="M12.7288 8.40179L11.7001 9.43056L9.26737 6.99772C9.14923 6.87973 8.95963 6.9683 8.82467 7.10311C8.68566 7.24227 8.60115 7.42782 8.71929 7.54596L11.4597 10.2865C11.5737 10.4003 11.7507 10.3413 11.873 10.219L13.2095 8.88247C13.3191 8.77289 13.2517 8.59575 13.1336 8.47775C13.0114 8.3554 12.8386 8.29206 12.7288 8.40179Z" fill="#FF7F23"/>
          <path d="M14.9338 6.19694L13.7407 7.3901L12.8932 6.54267L13.5341 5.90181C13.6521 5.78381 13.5931 5.61508 13.4961 5.5181C13.3823 5.40431 13.2136 5.36227 13.104 5.47186L12.4631 6.11258L11.6199 5.26936L12.8131 4.07635C12.9227 3.96661 12.8721 3.78962 12.7415 3.65887C12.6275 3.54507 12.4505 3.47752 12.3324 3.59552L10.8315 5.09656C10.7093 5.21876 10.6502 5.3959 10.7641 5.5097L13.5005 8.24593C13.6143 8.35987 13.7913 8.30087 13.9136 8.17853L15.4145 6.67763C15.5326 6.55963 15.4651 6.38249 15.3513 6.2687C15.2205 6.13795 15.0434 6.08736 14.9338 6.19694Z" fill="#FF7F23"/>
          <path d="M15.4919 2.98364C15.3454 2.98364 15.2017 3.04308 15.0982 3.14658C14.9947 3.25008 14.9353 3.39373 14.9353 3.54028C14.9353 3.68698 14.9947 3.8302 15.0982 3.9337C15.2017 4.03764 15.3454 4.09692 15.4919 4.09692C15.6385 4.09692 15.7817 4.03764 15.8854 3.9337C15.9892 3.8302 16.0486 3.68655 16.0486 3.54028C16.0486 3.39373 15.9892 3.25008 15.8854 3.14658C15.7817 3.04308 15.6385 2.98364 15.4919 2.98364Z" fill="#FF7F23"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="19" height="19" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <div className={styles.cost}>
          <p>Giảm giá 50%</p>
        </div>
      </div>
      <div className={styles.description}>
        <p>* 4 Món Chính: 110Gram Ba Chỉ Heo, 1 Thố Cơm Japonia, 1 Bát Canh Chua, Lòng Mề Xào.</p>
        <p>* 3 Món Phụ: Trứng Cuộn, Rau Luộc, Hoa Quả.</p>
        <p>* Free: Tăm Nha Khoa, Khăn Lạnh, Găng Tay</p>
      </div>
    </div>
  )
}
