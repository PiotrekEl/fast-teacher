<template>
  <div>
    <div class="home">
      <div class="home__question">
        <p class="no-margin">Question</p>
        <!-- here is problem when is end -->
        <div class="home__frame">
          {{ quest[randomIdx].pl || 0 }}
        </div>
      </div>
      <div class="home__answer">
        <p class="no-bottom-margin">Answer</p>
        <div class="home__frame">
          <label for="answer">
            <input @keyup.enter="checkAnswer" v-model="inputValue" class="home__input" type="text"
              id="answer" ref="input">
          </label>
          <button @click="checkAnswer" class="home__button">
            Check
          </button>
          <div v-show="dialog" @keyup.esc="hideDialog" class="dialog">
            <p class="no-margin">You write:</p>
            <p class="no-margin">{{ inputValue }}</p>
            <p class="no-bottom-margin">Should be:</p>
            <p class="no-margin font-light">{{ answer }}</p>
            <button @click="hideDialog" id="button" ref="buttonOk" class="home__button">
              OK
            </button>
          </div>
        </div>
      </div>
      <div class="home__stats">
        <p class="no-bottom-margin">Stats</p>
        <div class="home__frame">
          <p class="no-margin" :class="{ 'correct': isCorrect }">Correct: {{ questCorrect }}</p>
          <p class="no-margin"
            :class="{ 'incorrect': !isCorrect }">Mistakes: {{ questMistakes }}</p>
          <p class="no-margin">Left: {{ leftQuest }}</p>
          <p class="no-margin">Percent: {{ percent || 0 }} %</p>
        </div>
      </div>
    </div>
    <div class="home">
      <div class="home__info">
        <p class="home__info--title">Info</p>
        <P>Language: {{ wordsLanguage }}</P>
        <p>Name: {{ wordsName }}</p>
        <p class="no-bottom-margin">Size: {{ wordsSize }} words</p>
      </div>
    </div>
  </div>
</template>

<script>
//  for english words
// import words from '@/words';
// for german words
import modules from '@/german100';

export default {
  name: 'HomeView',

  data() {
    return {
      quest: modules.words,
      wordsLanguage: modules.info.language,
      wordsName: modules.info.name,
      wordsSize: modules.words.length,
      questCorrect: 0,
      questMistakes: 0,
      inputValue: '',
      randomIdx: 0,
      isCorrect: true,
      dialog: false,
    };
  },

  components: {
  },

  computed: {
    leftQuest() {
      return this.quest.length;
    },
    answer() {
      // for english words
      // eslint-disable-next-line max-len
      // return `${this.quest[this.randomIdx].present} ${this.quest[this.randomIdx].past} ${this.quest[this.randomIdx].participle}`;
      // for german words
      return this.quest[this.randomIdx].d;
    },
    percent() {
      return Math.round((this.questCorrect / (this.questCorrect + this.questMistakes)) * 100);
    },
  },

  methods: {
    checkAnswer() {
      if (this.inputValue !== '') {
        if (this.inputValue.replaceAll(/\s/g, '') !== this.answer.replaceAll(/\s/g, '')) {
          this.isCorrect = false;
          this.questMistakes += 1;
          this.showDialog();
        } else {
          this.questCorrect += 1;
          this.isCorrect = true;
          this.inputValue = '';
          if (this.quest.length > 1) {
            this.quest.splice(this.randomIdx, 1);
            this.randomIdx = this.getRandomInt();
          } else this.inputValue = 'KONIEC :)';
        }
        this.focusButton();
      } else this.focusInput();
    },

    getRandomInt() {
      return Math.floor(Math.random() * this.quest.length);
    },

    hideDialog() {
      this.dialog = false;
      this.randomIdx = this.getRandomInt();
      this.inputValue = '';
      this.focusInput();
    },

    showDialog() {
      this.dialog = true;
      this.focusButton();
    },

    focusInput() {
      this.$refs.input.focus();
    },

    focusButton() {
      this.$nextTick(() => {
        this.$refs.buttonOk.focus();
      });
    },
  },

  created() {
    this.randomIdx = this.getRandomInt();
  },

  mounted() {
    this.focusInput();
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.75rem;
  width: 20rem;
  margin: 3rem auto;
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 5%);

  @include breakpoint(xs) {
    width: 30rem;
  }

  &__button {
    background-color: #0061df;
    color: white;
    padding: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    border-radius: 5px;
    border: 0;
    margin-top: 1rem;
  }

  &__frame {
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;

    p {
      font-size: 1.25rem;
    }
  }

  &__input,
  &__input:focus {
    font-size: 1.5rem;
    width: 95%;
    background-color: white;
    border-style: solid;
    color: black;
    text-align: center;
    border-width: 0 0 2px 0;
    outline: none;
  }

  &__info {
    font-size: 1rem;
    color: #696969;
    &--title {
      color: black;
      font-weight: 600;
      font-size: 1.25rem;
      margin-top: 0;
    }
  }
}

.answer input:focus {
  outline: none;
}

.dialog {
  position: absolute;
  padding: 1rem;
  width: 50%;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border: 1px solid red;
}

.no-bottom-margin {
  margin-bottom: 0;
}

.no-top-margin {
  margin-top: 0;
}

.no-margin {
  margin: 0;
}

.correct {
  color: greenyellow;
}

.incorrect {
  color: red;
}

.button-disabled {
  pointer-events: none;
}

.font-light {
  font-weight: 200;
}
</style>
