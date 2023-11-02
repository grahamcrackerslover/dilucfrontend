<template>
<Modal/>
  <div class="main">
    <HeaderComponent />
    <CardBlock />
    <ItemBlock />
    <span ref="reviews" style="display: block; text-align: center; font-size: 32PX; color: white; margin-top: 35px; margin-bottom: 35px;">Отзывы</span>
    <FeedbackBlock />
    <div ref="about_us">
      <AboutBlock display-style="block" margin-top="200px" margin-bottom="400px">
        <!-- Insert your about text here -->
        <div  style="text-align: left; font-size: 80%;">
          <p>
            Добро пожаловать в мир увлекательных приключений Genshin Impact вместе с diluc.store — вашим надежным поставщиком внутриигровых ресурсов, открывающим новые горизонты для исследования бескрайних просторов Тейвата. Мы понимаем страсть каждого искателя приключений к раскрытию всех тайн мира Genshin Impact, и именно поэтому наш магазин предлагает самые выгодные условия для пополнения ваших ресурсов.
          </p>
          <h4>
            Почему diluc.store?
          </h4>
          <p>
            Мы не просто магазин, мы — команда единомышленников, знающих все о Genshin Impact и жаждущих сделать вашу игру еще более захватывающей:
          </p>
          <ul>
            <li><b>Лучшие цены:</b> Мы тщательно отслеживаем рынок, чтобы предложить вам самые низкие цены на Кристаллы Сотворения и Луну. И если вы найдете цену ниже — мы поднимем ставки, дав вам невероятную скидку в 50%!</li>
            <li><b>Быстрая доставка:</b> Мы ценим ваше время, как и вы. Поэтому мы гарантируем, что ваш заказ будет доставлен на ваш аккаунт в считанные минуты после покупки.</li>
            <li><b>Круглосуточная поддержка:</b> Наши специалисты готовы прийти на помощь 24/7. Будь то вопросы о процессе покупки, оформлении заказа или о игре — мы здесь, чтобы сделать ваш опыт непревзойденным.</li>
          </ul>
          <p>
            В diluc.store мы не просто продаем валюту — мы помогаем вам воплотить в жизнь ваши игровые мечты. Присоединяйтесь к тысячам довольных искателей приключений, которые уже выбрали нас в качестве своего предпочтительного игрового ресурса. Начните свое путешествие с нами сегодня и позвольте миру Genshin Impact раскрыться во всей красе!
          </p>
        </div>
      </AboutBlock>
    </div>
  </div>
  <Footer>
      <div style="display: flex;">
        <div>
          <p style="font-size: 70%;">
          Контакты:
          <ul>
            <li>Поддержка: <a class="email_link" href="mailto:support@diluc.store?">support@diluc.store</a></li>
            <li>Партнерство: <a class="email_link" href="mailto:partners@diluc.store?">partners@diluc.store</a></li>
            <li>Техподдержка: <a class="email_link" href="mailto:help@diluc.store?">help@diluc.store</a></li>
          </ul>
        </p>
        </div>
      </div>
      <div style="text-align: center;">
          <p style="font-size: 50%;">
            diluc.store не аффилирован с miHoYo и Genshin Impact. Торговые марки принадлежат их соответствующим владельцам.
          </p>
        </div>
      <div style="text-align: center;">
        <p style="font-size: 50%;">
        © 2023 diluc.store. Все права защищены.
        </p>
      </div>
  </Footer>
</template>

<script lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
import CardBlock from '../components/CardBlock.vue';
import ItemBlock from '../components/ItemBlock.vue';
import FeedbackBlock from '../components/FeedbackBlock.vue';
import AboutBlock from '../components/AboutBlock.vue';
import Footer from '../components/Footer.vue';
import Modal from "../components/Modal.vue";

export default {
    name: 'index',
    components: {
    HeaderComponent,
    CardBlock,
    ItemBlock,
    FeedbackBlock,
    AboutBlock,
    Footer,
    Modal,
  }
}
</script>


<style>
.email_link:link {
  color: orange;
  background-color: transparent;
  text-decoration: none;
}

.email_link:visited {
  color: orange;
  background-color: transparent;
  text-decoration: none;
}

.email_link:hover {
  color: rgb(255, 182, 46);
  background-color: transparent;
  text-decoration: underline;
}

.email_link:active {
  color: rgb(231, 150, 0);
  background-color: transparent;
  text-decoration: underline;
}
</style>