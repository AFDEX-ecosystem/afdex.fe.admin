<template>
  <div class="slider-container">
    <div
      class="slider-track"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <div class="h-[580px] w-full relative">
          <img class="w-full h-full" :src="slide.bg" alt="" />
          <div class="content_page z-30 absolute top-24 text-white w-full">
            <div class="grid_content">
              <h1 class="text-6xl font-black">{{ slide.title }}</h1>
              <p class="text-2xl mt-8 leading-loose">
                {{ slide.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="prevSlide" class="prev-btn">‹</button>
    <button @click="nextSlide" class="next-btn">›</button>
  </div>
  <div class="content py-[100px]">
    <div class="slider">
      <div class="content_page w-full">
        <div class="grid_content">
          <h1 class="text-5xl font-black text-[--base-color-3] text-center">
            HỆ SINH THÁI AFDEX
          </h1>
          <p class="text-4xl mt-8 leading-loose">
            Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa đơn
            hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu…
            là yếu tố quan trọng nhất trong công cuộc “chuyển đổi số nông
            nghiệp”. Công ty Cổ phần Hệ Sinh thái AFDEX (Gọi tắt là “Hệ Sinh
            thái AFDEX”) ra đời với mong muốn tiếp thu tiến bộ kỹ thuật trong
            sản xuất chế biến, nâng tầm văn hóa sản xuất, văn hóa tri ân trong
            giao dịch thương mại dịch vụ, nâng cao giá trị đặc trưng của sản
            phẩm vùng miền thông qua việc kế thừa thành quả đầu tư từ Hệ thống
            Cơ sở Dữ liệu trong “Niên giám Nông nghiệp Thực phẩm Việt Nam -
            2010” của Công ty TNHH Phố Chợ (Đơn vị đã được công nhận là doanh
            nghiệp xã hội và được nhận tài trợ 100.000USD từ Quỹ Tia sáng năm
            2011). Nền tảng Cơ sở Dữ liệu của Hệ Sinh thái AFDEX được phát triển
            từ Trung tâm Chăm sóc Thành viên ấn phẩm “Niên giám Nông nghiệp Thực
            phẩm Việt Nam - 2010” do Bộ Nông nghiệp và Phát triển Nông thôn
            (MARD) chỉ đạo phát hành. Năm 2010, Bộ Nông nghiệp & PTNT đã có văn
            bản đề nghị UBND các tỉnh tạo điều kiện tham gia Đề án AFDEX và lồng
            ghép việc thực hiện vào Chương trình Nông thôn mới, đồng thời giới
            thiệu với Trung ương Hội Nông dân Việt Nam để phối hợp. Trên cơ sở
            đó, chúng tôi đã hoàn thành chương trình nghiên cứu “Ý tưởng Hệ Sinh
            thái AFDEX” theo 4 hợp phần: (1) Thiết lập 60 Chuỗi Cung ứng nông
            sản theo 7 phân khúc mục tiêu; (2) Xây dựng mạng lưới 6 Điểm Sàn địa
            danh; (3) Triển khai 72 gói Dịch vụ Công-tư; (4) Hoàn thiện Cơ chế
            hợp tác đầu tư theo “Công thức 40-12-48”.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import img1 from '@/assets/images/background/vegetable-farmer-arranging-freshly-picked-produce-into-crates-organic-farm.jpg'
import img2 from '@/assets/images/background/farmer-holds-rice-hand.jpg'
import img3 from '@/assets/images/background/earth-from-space-best-internet-concept-global-business-from-concepts-series.jpg'
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          bg: img1,
          title: "HUYỆN SI MA CAI - LÀO CAI",
          description: `Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn
          hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên
          liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số
          nông nghiệp”. Công ty Cổ phần Hệ Sinh thái AFDEX (Gọi tắt là “Hệ
          Sinh thái AFDEX”) ra ời với mong muốn tiếp thu tiến bộ kỹ thuật
          trong sản xuất chế biến, nâng tầm văn hóa sản xuất, văn hóa tri
          ân trong giao dịch thương mại dịch vụ, nâng cao giá trị ặc trưng
          của sản phẩm vùng miền thông qua việc kế thừa thành quả ầu tư từ
          Cơ sở Dữ liệu trong “Niên giám Nông nghiệp Thực phẩm Việt Nam -
          2010” của Công ty TNHH Phố Chợ.`,
        },
        {
          bg: img2,
          title: "HUYỆN KIM SƠN - NINH BÌNH",
          description: `Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn
          hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên
          liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số
          nông nghiệp”. Công ty Cổ phần Hệ Sinh thái AFDEX (Gọi tắt là “Hệ
          Sinh thái AFDEX”) ra ời với mong muốn tiếp thu tiến bộ kỹ thuật
          trong sản xuất chế biến, nâng tầm văn hóa sản xuất, văn hóa tri
          ân trong giao dịch thương mại dịch vụ, nâng cao giá trị ặc trưng
          của sản phẩm vùng miền thông qua việc kế thừa thành quả ầu tư từ
          Cơ sở Dữ liệu trong “Niên giám Nông nghiệp Thực phẩm Việt Nam -
          2010” của Công ty TNHH Phố Chợ.`,
        },
        {
          bg: img3,
          title: "HUYỆN ĐÀ BẮC - HÒA BÌNH",
          description: `Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn
          hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên
          liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số
          nông nghiệp”. Công ty Cổ phần Hệ Sinh thái AFDEX (Gọi tắt là “Hệ
          Sinh thái AFDEX”) ra ời với mong muốn tiếp thu tiến bộ kỹ thuật
          trong sản xuất chế biến, nâng tầm văn hóa sản xuất, văn hóa tri
          ân trong giao dịch thương mại dịch vụ, nâng cao giá trị ặc trưng
          của sản phẩm vùng miền thông qua việc kế thừa thành quả ầu tư từ
          Cơ sở Dữ liệu trong “Niên giám Nông nghiệp Thực phẩm Việt Nam -
          2010” của Công ty TNHH Phố Chợ.`,
        },
        // Thêm các slide khác tương tự như trên nếu cần
      ],
      intervalId: null as ReturnType<typeof setInterval> | null,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
    },
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, 3000); // Chạy slide mỗi 3 giây
    },
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null; // Đặt lại để tránh gọi `clearInterval` nhiều lần
      }
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slide {
  min-width: 100%;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
