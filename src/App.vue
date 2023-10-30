<template>
  <div class="main">
    <HeaderComponent />
    <CardBlock />
    <ItemBlock />
    <span style="display: block; text-align: center; font-size: 32PX; color: white; margin-top: 35px; margin-bottom: 35px;">Отзывы</span>
    <FeedbackBlock />
    <AboutBlock display-style="block" margin-top="200px" margin-bottom="400px">
      <!-- Insert your about text here -->
      <p>velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras sempervelit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras sempervelit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras sempervelit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper</p>
    </AboutBlock>
  </div>
  <Footer>
      <p>
        <!-- Insert your footer text here -->
        velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper
      </p>
  </Footer>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CardBlock from './components/CardBlock.vue';
import ItemBlock from './components/ItemBlock.vue';
import FeedbackBlock from './components/FeedbackBlock.vue';
import AboutBlock from './components/AboutBlock.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
    HeaderComponent,
    CardBlock,
    ItemBlock,
    FeedbackBlock,
    AboutBlock,
    Footer,
  }
}
</script>
