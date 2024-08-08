<template lang="pug">
.first-screen 
    .first-screen__container.container
        .first-screen__content 
            h4.first-screen__title_small 
                | Руководитель ИТ-проектов
            h1.first-screen__title 
                | Виталий Кузьмин
            p.first-screen__description 
                | Более 5-ти лет управления ИТ проектами различной сложности и бюджета в заказной веб-разработке.
                | Опыт в ИТ 12 лет.

            .first-screen__field 
                a.button(href="/" title="")
                    | Скачать CV
                a.button(href="" title="")
                    // icon
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9554 6.59067C19.7286 6.59067 19.9321 7.1755 19.7034 8.54867C19.4416 10.1189 18.6877 15.3178 18.0864 18.5541C17.8563 19.7925 17.4415 20.3265 16.8379 20.3265C16.506 20.3265 16.1174 20.1651 15.6709 19.8704C15.0659 19.4708 12.0116 17.4509 11.3484 16.9765C10.7434 16.5443 9.90877 16.0241 10.9556 15.0002C11.3282 14.6353 13.7698 12.3038 15.6719 10.4893C15.8749 10.2954 15.7049 9.99975 15.4794 9.99975C15.428 9.99975 15.3735 10.0153 15.3203 10.0506C12.7564 11.751 9.2011 14.111 8.74873 14.4185C8.29635 14.7256 7.85543 14.9227 7.26785 14.9227C6.96764 14.9227 6.62893 14.8714 6.23064 14.7568C5.3401 14.501 4.47064 14.1963 4.13193 14.0798C2.82798 13.6325 3.13735 13.0527 4.40373 12.4954C9.48114 10.2619 16.0514 7.5385 16.9584 7.16175C17.8421 6.79463 18.4984 6.59067 18.9554 6.59067ZM18.9554 5.21567C18.3284 5.21567 17.5735 5.41779 16.4318 5.89125L16.2947 5.94808C11.4204 7.97208 7.00064 9.85033 3.85006 11.2363C3.35781 11.4531 1.86043 12.1118 1.91864 13.4895C1.94339 14.084 2.27064 14.8943 3.68598 15.3797L3.79048 15.4154C4.18556 15.5515 5.00827 15.8353 5.8516 16.0777C6.36493 16.2253 6.82877 16.2968 7.26831 16.2968C8.03098 16.2968 8.62177 16.0791 9.08377 15.8256C9.08148 15.9026 9.08331 15.9801 9.08927 16.058C9.17268 17.1177 9.99218 17.6988 10.4817 18.0463L10.55 18.0948C11.2728 18.6118 14.5439 20.7729 14.9142 21.0172C15.6114 21.4773 16.2406 21.7005 16.8388 21.7005C17.7793 21.7005 18.9943 21.1982 19.4389 18.8048C19.861 16.5347 20.3487 13.3635 20.7048 11.048C20.8565 10.0598 20.9812 9.24946 21.0605 8.77417C21.2204 7.81442 21.2938 6.72725 20.626 5.93938C20.3455 5.60938 19.8285 5.21567 18.9554 5.21567Z" fill="#198CFF"/>
                    </svg>
                a.button(href="#" title="")
                    // icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0004 2.39999C6.69879 2.39999 2.40039 6.69839 2.40039 12C2.40039 16.4984 5.49799 20.2624 9.67399 21.304C9.62919 21.1744 9.60039 21.024 9.60039 20.8376V19.1968C9.21079 19.1968 8.55799 19.1968 8.39399 19.1968C7.73719 19.1968 7.15319 18.9144 6.86999 18.3896C6.55559 17.8064 6.50119 16.9144 5.72199 16.3688C5.49079 16.1872 5.66679 15.98 5.93319 16.008C6.42519 16.1472 6.83319 16.4848 7.21719 16.9856C7.59959 17.4872 7.77959 17.6008 8.49399 17.6008C8.84039 17.6008 9.35879 17.5808 9.84679 17.504C10.1092 16.8376 10.5628 16.224 11.1172 15.9344C7.92039 15.6056 6.39479 14.0152 6.39479 11.856C6.39479 10.9264 6.79079 10.0272 7.46359 9.26959C7.24279 8.51759 6.96519 6.98399 7.54839 6.39999C8.98679 6.39999 9.85639 7.33279 10.0652 7.58479C10.782 7.33919 11.5692 7.19999 12.3964 7.19999C13.2252 7.19999 14.0156 7.33919 14.734 7.58639C14.9404 7.33599 15.8108 6.39999 17.2524 6.39999C17.838 6.98479 17.5572 8.52479 17.334 9.27519C18.0028 10.0312 18.3964 10.928 18.3964 11.856C18.3964 14.0136 16.8732 15.6032 13.6812 15.9336C14.5596 16.392 15.2004 17.68 15.2004 18.6504V20.8376C15.2004 20.9208 15.182 20.9808 15.1724 21.052C18.9132 19.7408 21.6004 16.1888 21.6004 12C21.6004 6.69839 17.302 2.39999 12.0004 2.39999Z" fill="#007AFF"/>
                    </svg>

        .first-screen__about
            .first-screen__info-box.info-box 
                .info-box__title
                    | +25
                .info-box__description 
                    | Запущенных проектов

            .first-screen__info-box.first-screen__info-box_bottom.info-box 
                .info-box__icon 
                    // icon
                .info-box__content
                    .info-box__title
                        | 30
                    .info-box__description 
                        | Клиентов

            .first-screen__circle.first-screen__circle_top.circle
            .first-screen__circle.first-screen__circle_bottom.circle
            .first-screen__icon-graph
                // icon
            .first-screen__icon-check
                // icon
                <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_704_581)">
                        <rect y="18.2294" width="58" height="58" rx="8" transform="rotate(-18.3185 0 18.2294)" fill="#198CFF"/>
                        <g clip-path="url(#clip1_704_581)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.5545 18.6987L20.5052 26.6615C18.8518 27.209 17.9469 29.0097 18.4944 30.6631L25.4619 51.7062C26.0093 53.3596 27.81 54.2645 29.4634 53.717L53.5128 45.7542C55.1661 45.2067 56.071 43.406 55.5236 41.7526L48.556 20.7095C48.0086 19.0561 46.2079 18.1512 44.5545 18.6987ZM36.4912 44.7186L28.9758 47.207L27.9804 44.2009L35.4958 41.7125L36.4912 44.7186ZM34.5005 38.7063L26.9851 41.1947L25.9897 38.1885L33.5051 35.7001L34.5005 38.7063ZM32.5098 32.694L24.9944 35.1824L23.999 32.1762L31.5144 29.6878L32.5098 32.694ZM42.7407 39.3136L37.0886 36.4483L38.5062 33.6273L41.3323 35.0599L44.5194 28.7175L47.3605 30.1452L42.7407 39.3136Z" fill="white"/>
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_704_581">
                            <rect y="18.2294" width="58" height="58" rx="8" transform="rotate(-18.3185 0 18.2294)" fill="white"/>
                        </clipPath>
                        <clipPath id="clip1_704_581">
                            <rect width="38" height="38" fill="white" transform="translate(13 24.143) rotate(-18.32)"/>
                        </clipPath>
                    </defs>
                </svg>
            img.first-screen__image(src="/src/assets/about.png" alt="@@")
            .first-screen__square.first-screen__square_top.square
                <svg width="156" height="180" viewBox="0 0 156 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="174" r="6" transform="rotate(-90 6 174)" fill="#F6F9FF"/>
                    <circle cx="30" cy="174" r="6" transform="rotate(-90 30 174)" fill="#F6F9FF"/>
                    <circle cx="54" cy="174" r="6" transform="rotate(-90 54 174)" fill="#F6F9FF"/>
                    <circle cx="78" cy="174" r="6" transform="rotate(-90 78 174)" fill="#F6F9FF"/>
                    <circle cx="102" cy="174" r="6" transform="rotate(-90 102 174)" fill="#F6F9FF"/>
                    <circle cx="126" cy="174" r="6" transform="rotate(-90 126 174)" fill="#F6F9FF"/>
                    <circle cx="150" cy="174" r="6" transform="rotate(-90 150 174)" fill="#F6F9FF"/>
                    <circle cx="6" cy="150" r="6" transform="rotate(-90 6 150)" fill="#F6F9FF"/>
                    <circle cx="30" cy="150" r="6" transform="rotate(-90 30 150)" fill="#F6F9FF"/>
                    <circle cx="54" cy="150" r="6" transform="rotate(-90 54 150)" fill="#F6F9FF"/>
                    <circle cx="78" cy="150" r="6" transform="rotate(-90 78 150)" fill="#F6F9FF"/>
                    <circle cx="102" cy="150" r="6" transform="rotate(-90 102 150)" fill="#F6F9FF"/>
                    <circle cx="126" cy="150" r="6" transform="rotate(-90 126 150)" fill="#F6F9FF"/>
                    <circle cx="150" cy="150" r="6" transform="rotate(-90 150 150)" fill="#F6F9FF"/>
                    <circle cx="6" cy="126" r="6" transform="rotate(-90 6 126)" fill="#F6F9FF"/>
                    <circle cx="30" cy="126" r="6" transform="rotate(-90 30 126)" fill="#F6F9FF"/>
                    <circle cx="54" cy="126" r="6" transform="rotate(-90 54 126)" fill="#F6F9FF"/>
                    <circle cx="78" cy="126" r="6" transform="rotate(-90 78 126)" fill="#F6F9FF"/>
                    <circle cx="102" cy="126" r="6" transform="rotate(-90 102 126)" fill="#F6F9FF"/>
                    <circle cx="126" cy="126" r="6" transform="rotate(-90 126 126)" fill="#F6F9FF"/>
                    <circle cx="150" cy="126" r="6" transform="rotate(-90 150 126)" fill="#F6F9FF"/>
                    <circle cx="6" cy="102" r="6" transform="rotate(-90 6 102)" fill="#F6F9FF"/>
                    <circle cx="30" cy="102" r="6" transform="rotate(-90 30 102)" fill="#F6F9FF"/>
                    <circle cx="54" cy="102" r="6" transform="rotate(-90 54 102)" fill="#F6F9FF"/>
                    <circle cx="78" cy="102" r="6" transform="rotate(-90 78 102)" fill="#F6F9FF"/>
                    <circle cx="102" cy="102" r="6" transform="rotate(-90 102 102)" fill="#F6F9FF"/>
                    <circle cx="126" cy="102" r="6" transform="rotate(-90 126 102)" fill="#F6F9FF"/>
                    <circle cx="150" cy="102" r="6" transform="rotate(-90 150 102)" fill="#F6F9FF"/>
                    <circle cx="6" cy="78" r="6" transform="rotate(-90 6 78)" fill="#F6F9FF"/>
                    <circle cx="30" cy="78" r="6" transform="rotate(-90 30 78)" fill="#F6F9FF"/>
                    <circle cx="54" cy="78" r="6" transform="rotate(-90 54 78)" fill="#F6F9FF"/>
                    <circle cx="78" cy="78" r="6" transform="rotate(-90 78 78)" fill="#F6F9FF"/>
                    <circle cx="102" cy="78" r="6" transform="rotate(-90 102 78)" fill="#F6F9FF"/>
                    <circle cx="126" cy="78" r="6" transform="rotate(-90 126 78)" fill="#F6F9FF"/>
                    <circle cx="150" cy="78" r="6" transform="rotate(-90 150 78)" fill="#F6F9FF"/>
                    <circle cx="6" cy="54" r="6" transform="rotate(-90 6 54)" fill="#F6F9FF"/>
                    <circle cx="30" cy="54" r="6" transform="rotate(-90 30 54)" fill="#F6F9FF"/>
                    <circle cx="54" cy="54" r="6" transform="rotate(-90 54 54)" fill="#F6F9FF"/>
                    <circle cx="78" cy="54" r="6" transform="rotate(-90 78 54)" fill="#F6F9FF"/>
                    <circle cx="102" cy="54" r="6" transform="rotate(-90 102 54)" fill="#F6F9FF"/>
                    <circle cx="126" cy="54" r="6" transform="rotate(-90 126 54)" fill="#F6F9FF"/>
                    <circle cx="150" cy="54" r="6" transform="rotate(-90 150 54)" fill="#F6F9FF"/>
                    <circle cx="6" cy="30" r="6" transform="rotate(-90 6 30)" fill="#F6F9FF"/>
                    <circle cx="30" cy="30" r="6" transform="rotate(-90 30 30)" fill="#F6F9FF"/>
                    <circle cx="54" cy="30" r="6" transform="rotate(-90 54 30)" fill="#F6F9FF"/>
                    <circle cx="78" cy="30" r="6" transform="rotate(-90 78 30)" fill="#F6F9FF"/>
                    <circle cx="102" cy="30" r="6" transform="rotate(-90 102 30)" fill="#F6F9FF"/>
                    <circle cx="126" cy="30" r="6" transform="rotate(-90 126 30)" fill="#F6F9FF"/>
                    <circle cx="150" cy="30" r="6" transform="rotate(-90 150 30)" fill="#F6F9FF"/>
                    <circle cx="6" cy="6" r="6" transform="rotate(-90 6 6)" fill="#F6F9FF"/>
                    <circle cx="30" cy="6" r="6" transform="rotate(-90 30 6)" fill="#F6F9FF"/>
                    <circle cx="54" cy="6" r="6" transform="rotate(-90 54 6)" fill="#F6F9FF"/>
                    <circle cx="78" cy="6" r="6" transform="rotate(-90 78 6)" fill="#F6F9FF"/>
                    <circle cx="102" cy="5.99999" r="6" transform="rotate(-90 102 5.99999)" fill="#F6F9FF"/>
                    <circle cx="126" cy="5.99999" r="6" transform="rotate(-90 126 5.99999)" fill="#F6F9FF"/>
                    <circle cx="150" cy="5.99999" r="6" transform="rotate(-90 150 5.99999)" fill="#F6F9FF"/>
                </svg>
            .first-screen__square.first-screen__square_bottom.square
                // icon
                <svg width="156" height="180" viewBox="0 0 156 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="174" r="6" transform="rotate(-90 6 174)" fill="#F6F9FF"/>
                    <circle cx="30" cy="174" r="6" transform="rotate(-90 30 174)" fill="#F6F9FF"/>
                    <circle cx="54" cy="174" r="6" transform="rotate(-90 54 174)" fill="#F6F9FF"/>
                    <circle cx="78" cy="174" r="6" transform="rotate(-90 78 174)" fill="#F6F9FF"/>
                    <circle cx="102" cy="174" r="6" transform="rotate(-90 102 174)" fill="#F6F9FF"/>
                    <circle cx="126" cy="174" r="6" transform="rotate(-90 126 174)" fill="#F6F9FF"/>
                    <circle cx="150" cy="174" r="6" transform="rotate(-90 150 174)" fill="#F6F9FF"/>
                    <circle cx="6" cy="150" r="6" transform="rotate(-90 6 150)" fill="#F6F9FF"/>
                    <circle cx="30" cy="150" r="6" transform="rotate(-90 30 150)" fill="#F6F9FF"/>
                    <circle cx="54" cy="150" r="6" transform="rotate(-90 54 150)" fill="#F6F9FF"/>
                    <circle cx="78" cy="150" r="6" transform="rotate(-90 78 150)" fill="#F6F9FF"/>
                    <circle cx="102" cy="150" r="6" transform="rotate(-90 102 150)" fill="#F6F9FF"/>
                    <circle cx="126" cy="150" r="6" transform="rotate(-90 126 150)" fill="#F6F9FF"/>
                    <circle cx="150" cy="150" r="6" transform="rotate(-90 150 150)" fill="#F6F9FF"/>
                    <circle cx="6" cy="126" r="6" transform="rotate(-90 6 126)" fill="#F6F9FF"/>
                    <circle cx="30" cy="126" r="6" transform="rotate(-90 30 126)" fill="#F6F9FF"/>
                    <circle cx="54" cy="126" r="6" transform="rotate(-90 54 126)" fill="#F6F9FF"/>
                    <circle cx="78" cy="126" r="6" transform="rotate(-90 78 126)" fill="#F6F9FF"/>
                    <circle cx="102" cy="126" r="6" transform="rotate(-90 102 126)" fill="#F6F9FF"/>
                    <circle cx="126" cy="126" r="6" transform="rotate(-90 126 126)" fill="#F6F9FF"/>
                    <circle cx="150" cy="126" r="6" transform="rotate(-90 150 126)" fill="#F6F9FF"/>
                    <circle cx="6" cy="102" r="6" transform="rotate(-90 6 102)" fill="#F6F9FF"/>
                    <circle cx="30" cy="102" r="6" transform="rotate(-90 30 102)" fill="#F6F9FF"/>
                    <circle cx="54" cy="102" r="6" transform="rotate(-90 54 102)" fill="#F6F9FF"/>
                    <circle cx="78" cy="102" r="6" transform="rotate(-90 78 102)" fill="#F6F9FF"/>
                    <circle cx="102" cy="102" r="6" transform="rotate(-90 102 102)" fill="#F6F9FF"/>
                    <circle cx="126" cy="102" r="6" transform="rotate(-90 126 102)" fill="#F6F9FF"/>
                    <circle cx="150" cy="102" r="6" transform="rotate(-90 150 102)" fill="#F6F9FF"/>
                    <circle cx="6" cy="78" r="6" transform="rotate(-90 6 78)" fill="#F6F9FF"/>
                    <circle cx="30" cy="78" r="6" transform="rotate(-90 30 78)" fill="#F6F9FF"/>
                    <circle cx="54" cy="78" r="6" transform="rotate(-90 54 78)" fill="#F6F9FF"/>
                    <circle cx="78" cy="78" r="6" transform="rotate(-90 78 78)" fill="#F6F9FF"/>
                    <circle cx="102" cy="78" r="6" transform="rotate(-90 102 78)" fill="#F6F9FF"/>
                    <circle cx="126" cy="78" r="6" transform="rotate(-90 126 78)" fill="#F6F9FF"/>
                    <circle cx="150" cy="78" r="6" transform="rotate(-90 150 78)" fill="#F6F9FF"/>
                    <circle cx="6" cy="54" r="6" transform="rotate(-90 6 54)" fill="#F6F9FF"/>
                    <circle cx="30" cy="54" r="6" transform="rotate(-90 30 54)" fill="#F6F9FF"/>
                    <circle cx="54" cy="54" r="6" transform="rotate(-90 54 54)" fill="#F6F9FF"/>
                    <circle cx="78" cy="54" r="6" transform="rotate(-90 78 54)" fill="#F6F9FF"/>
                    <circle cx="102" cy="54" r="6" transform="rotate(-90 102 54)" fill="#F6F9FF"/>
                    <circle cx="126" cy="54" r="6" transform="rotate(-90 126 54)" fill="#F6F9FF"/>
                    <circle cx="150" cy="54" r="6" transform="rotate(-90 150 54)" fill="#F6F9FF"/>
                    <circle cx="6" cy="30" r="6" transform="rotate(-90 6 30)" fill="#F6F9FF"/>
                    <circle cx="30" cy="30" r="6" transform="rotate(-90 30 30)" fill="#F6F9FF"/>
                    <circle cx="54" cy="30" r="6" transform="rotate(-90 54 30)" fill="#F6F9FF"/>
                    <circle cx="78" cy="30" r="6" transform="rotate(-90 78 30)" fill="#F6F9FF"/>
                    <circle cx="102" cy="30" r="6" transform="rotate(-90 102 30)" fill="#F6F9FF"/>
                    <circle cx="126" cy="30" r="6" transform="rotate(-90 126 30)" fill="#F6F9FF"/>
                    <circle cx="150" cy="30" r="6" transform="rotate(-90 150 30)" fill="#F6F9FF"/>
                    <circle cx="6" cy="6" r="6" transform="rotate(-90 6 6)" fill="#F6F9FF"/>
                    <circle cx="30" cy="6" r="6" transform="rotate(-90 30 6)" fill="#F6F9FF"/>
                    <circle cx="54" cy="6" r="6" transform="rotate(-90 54 6)" fill="#F6F9FF"/>
                    <circle cx="78" cy="6" r="6" transform="rotate(-90 78 6)" fill="#F6F9FF"/>
                    <circle cx="102" cy="5.99999" r="6" transform="rotate(-90 102 5.99999)" fill="#F6F9FF"/>
                    <circle cx="126" cy="5.99999" r="6" transform="rotate(-90 126 5.99999)" fill="#F6F9FF"/>
                    <circle cx="150" cy="5.99999" r="6" transform="rotate(-90 150 5.99999)" fill="#F6F9FF"/>
                </svg>

</template>

<style lang="scss">
.first-screen {
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__content {
    margin-top: 250px;
    width: 664px;
  }

  &__about {
    margin-top: 120px;
    position: relative;
    width: 614px;
  }

  &__info-box {
    position: absolute;
  }

  &__circle {
    position: absolute;
  }

  &__square {
    position: absolute;
  }

  &__image {
    width: 516px;
    height: 554px;
  }
}

.info-box {
  padding: 16px;
  width: auto;
  display: flex;
  border-radius: 16px;
  box-shadow:
    0px 5px 10px 0px rgba(0, 0, 0, 0.05),
    1px 19px 19px 0px rgba(0, 0, 0, 0.04),
    3px 43px 26px 0px rgba(0, 0, 0, 0.03),
    5px 76px 31px 0px rgba(0, 0, 0, 0.01),
    8px 119px 33px 0px rgba(0, 0, 0, 0);
  background: rgb(255, 255, 255);
}

.circle {
  width: 22px;
  height: 22px;
  background: #44aafc;
  border-radius: 50%;
}
</style>
