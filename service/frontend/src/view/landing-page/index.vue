<script setup lang="ts">
import { Button, Carousel } from "primevue";
import jobData from "../../mock/job.json";
import AppHeader from "../../components/common/AppHeader.vue";
import Card from "../../components/Card.vue";
import { ref } from "vue";

const jobs = ref(jobData);
</script>

<template>
  <div class="landing_page_wrapper">
    <AppHeader />
    <div class="landing_page_wrapper_background">
      <div class="landing_page_wrapper_background_overlay">
        <div class="landing_page_wrapper_background_overlay_text"># Back to 2014</div>
        <div class="landing_page_wrapper_background_overlay_title">
          TÌM LẠI TUỔI THƠ CỦA BẠN TẠI
        </div>
        <div class="landing_page_wrapper_background_overlay_brand">NRGAME.VN</div>
        <div class="landing_page_wrapper_background_overlay_button">Tham gia ngay</div>
      </div>
    </div>

    <div class="landing_page_wrapper_feature">
      <div class="landing_page_wrapper_feature_container">
        <div class="landing_page_wrapper_feature_container_title">Nổi bật</div>
        <div class="landing_page_wrapper_feature_container_description">
          Hệ thống
          <span style="color: var(--color-primary-light)">nametag</span>
          cực kỳ bắt mắt
        </div>
      </div>
      <div class="landing_page_wrapper_feature_carousel">
        <Carousel
          :value="jobs"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="[
            { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
            { breakpoint: '768px', numVisible: 1, numScroll: 1 },
          ]"
          circular
          :autoplayInterval="3000"
        >
          <template #item="slotProps">
            <Card
              :image="slotProps.data.image"
              :title="slotProps.data.title"
              :description="slotProps.data.description"
            />
          </template>
        </Carousel>
      </div>
    </div>

    <div class="landing_page_wrapper_more">
      <div class="landing_page_wrapper_more_container">
        <div class="landing_page_wrapper_more_container_title">
          Hiểu thêm về NRGAME.VN
        </div>
        <div class="landing_page_wrapper_more_container_slogan">
          Made for players,
          <span style="color: var(--color-primary-light)">by players</span>
        </div>
        <div class="landing_page_wrapper_more_container_description">
          <p class="landing_page_wrapper_more_container_description_text">
            NRGAME.VN được tạo ra với mục tiêu mang đến trải nghiệm nhập vai vui nhộn,
            chân thực và năng động.
          </p>
          <p class="landing_page_wrapper_more_container_description_text">
            NRG TEAM luôn tìm cách mang đến những tính năng độc đáo cho máy chủ và lắng
            nghe góp ý từ người chơi, liên tục cập nhật những hệ thống thú vị.
          </p>
          <p class="landing_page_wrapper_more_container_description_text">
            NRGAME được thành lập vào ngày 19/05/2025.<br />
            Mọi bản quyền trò chơi đều thuộc về RockstarGame.
          </p>

          <Button label="Readmore" style="width: 30%" />
        </div>
      </div>
      <img
        class="landing_page_wrapper_more_image"
        src="../../../public/assets/character_team.webp"
        alt=""
      />
    </div>

    <div class="landing_page_wrapper_reason">
      <div class="landing_page_wrapper_reason_container">
        <div class="landing_page_wrapper_reason_container_title">
          Tại sao nên chọn NRGAME.VN
        </div>
        <div class="landing_page_wrapper_reason_container_slogan">
          Bắt đầu hành trình nhập vai <br />
          <span style="color: var(--color-primary-light)">theo cách bạn muốn</span>
        </div>
        <div class="landing_page_wrapper_reason_container_description">
          <p class="landing_page_wrapper_reason_container_description_text">
            NRGAME.VN sử dụng phiên bản năm 2014. Với lối chơi nhập vai normal, dễ tiếp
            cận đến tất cả người chơi. Hệ thống và các lệnh cơ bản dễ sử dụng. Đem lại cảm
            giác hoài niệm, tìm lại tuổi thơ cho tất cả người mới và cũ.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing_page_wrapper {
  height: 100vh;
  width: 100vw;

  &_background {
    margin-top: -63px;
    height: 500px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background-image: url("../../../public/assets/landing_background.webp");
    background-position: center;
    background-size: cover;
    clip-path: polygon(0 50px, 15% 35px, 85% 35px, 100% 50px, 100% 100%, 0 100%);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 60%,
        rgba(0, 0, 0, 0.1) 80%,
        rgba(0, 0, 0, 0.2) 100%
      );
      backdrop-filter: blur(0px) blur(0px) blur(0px) blur(0px) blur(0px) blur(0px)
        blur(0px) blur(0px) blur(8px);
      mask-image: linear-gradient(to bottom, transparent 0%, transparent 70%, black 100%);
      z-index: 0;
    }

    &_overlay {
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      padding: 20px;

      &_text {
        font-size: var(--text-xl);
        color: var(--color-primary-light);
        font-weight: var(--weight-semibold);
      }

      &_title {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-2) var(--space-8);
        color: var(--color-secondary);
        font-size: var(--text-xl);
        font-weight: var(--weight-bold);
        text-transform: uppercase;
        white-space: nowrap;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid white;
          border-radius: 100px;
          clip-path: polygon(
            0% 0%,
            30% 0%,
            30% 3px,
            70% 3px,
            70% 0%,
            100% 0%,
            100% 100%,
            70% 100%,
            70% calc(100% - 3px),
            30% calc(100% - 3px),
            30% 100%,
            0% 100%,
            0% 0%,
            30% 0%,
            30% 100%,
            0% 100%,
            100% 0%,
            calc(100% - 2px) 0%,
            calc(100% - 2px) 100%,
            100% 100%
          );
        }
      }

      &_brand {
        font-size: var(--text-4xl);
        color: var(--color-primary-light);
        font-weight: var(--weight-bold);
      }

      &_button {
        margin-top: var(--space-4);
        padding: var(--space-2) var(--space-4);
        background-color: var(--color-primary-light);
        border-radius: var(--radius-md);
        font-size: var(--text-base);
        font-weight: var(--weight-semibold);
      }
    }
  }

  &_feature {
    margin-top: var(--space-8);
    padding: var(--space-4) var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);

    &_container {
      display: flex;
      flex-direction: column;

      &_title {
        text-transform: uppercase;
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--color-secondary);
      }

      &_description {
        width: 40%;
        line-height: var(--leading-tight);
        color: var(--color-secondary);
        font-size: var(--text-4xl);
        font-weight: var(--weight-bold);
      }
    }

    &_carousel {
      height: max-content;

      :deep(.p-carousel-item) {
        padding: 0 var(--space-2);
      }
    }
  }

  &_more {
    margin-top: var(--space-8);
    padding: var(--space-4) var(--space-8);
    display: flex;
    flex-direction: row;
    gap: var(--space-6);

    // Responsive cho mobile
    @media (max-width: 768px) {
      flex-direction: column;
    }

    &_container {
      width: 50%;
      display: flex;
      flex-direction: column;

      // Responsive cho mobile
      @media (max-width: 768px) {
        width: 100%;
      }

      &_title {
        text-transform: uppercase;
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--color-secondary);
      }

      &_slogan {
        line-height: var(--leading-tight);
        color: var(--color-secondary);
        font-size: var(--text-4xl);
        font-weight: var(--weight-bold);

        // Responsive cho mobile
        @media (max-width: 768px) {
          font-size: var(--text-2xl);
        }
      }

      &_description {
        display: flex;
        flex-direction: column;

        &_text {
          color: var(--color-secondary);
          font-size: var(--text-sm);
          margin-bottom: var(--space-4);
        }
      }
    }

    &_image {
      height: 50%;
      width: 50%;
      object-fit: contain;

      // Responsive cho mobile
      @media (max-width: 768px) {
        width: 100%;
        height: auto;
        max-height: 400px;
      }
    }
  }

  &_reason {
    display: flex;
    flex-direction: column;
    padding: var(--space-4) var(--space-8);

    &_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      margin-bottom: var(--space-6);

      &_title {
        text-transform: uppercase;
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--color-secondary);
      }

      &_slogan {
        line-height: var(--leading-tight);
        color: var(--color-secondary);
        font-size: var(--text-4xl);
        font-weight: var(--weight-bold);

        // Responsive cho mobile
        @media (max-width: 768px) {
          font-size: var(--text-2xl);
        }
      }

      &_description {
        width: 50%;
        display: flex;
        justify-content: center;
        align-content: center;

        &_text {
          color: var(--color-secondary);
          font-size: var(--text-sm);
          margin-bottom: var(--space-4);
        }
      }
    }
  }
}
</style>
