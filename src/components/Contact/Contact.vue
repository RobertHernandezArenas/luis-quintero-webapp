<template>
  <form class="contact" action="https://formsubmit.co/roberthernandezarenas@gmail.com" method="POST">
    <h2 class="contact__title">CONTACT US</h2>

    <div class="contact__form">
      <input
        id="name"
        name="name"
        class="contact__form-input"
        type="text"
        placeholder=" "
        autocomplete="off"
        required
      />
      <label for="name" class="contact__form-label">Nombre Completo</label>
    </div>

    <div class="contact__form">
      <input
        id="email"
        name="email"
        class="contact__form-input"
        type="email"
        placeholder=" "
        autocomplete="off"
        required
      />
      <label for="name" class="contact__form-label">Email</label>
    </div>

    <div class="contact__form">
      <input
        id="subject"
        name="subject"
        class="contact__form-input"
        type="text"
        placeholder=" "
        autocomplete="off"
        required
      />
      <label for="subject" class="contact__form-label">Asunto</label>
    </div>

    <div class="contact__form">
        <label for="message" class="contact-form__lbl">Mensaje</label>
        <textarea class="contact__form-txt-area" id="message" name="message"></textarea>

    </div>

    <div class="contact__form">

        <button class="contact__form-button">Enviar</button>  
    </div>
    </form>
</template>

<script setup>
import { ref } from "vue";

const inputFX = () => {};
</script>

<style scoped>
.contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  flex-direction: column;
    align-items: center;
    width: 100vw;
}
.contact__title {
    font-family: 'Futura';
    font-size: 24px;
}
.contact .contact__form {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 18rem;
  height: 3rem;
}

.contact .contact__form:nth-child(5) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 18rem;
    height: 10rem;
}




.contact__form-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-radius: 2px;
  outline: none;
  padding: 1rem;
  background: none;
  color: white;
      font-size: 16px;
}

.contact__form-input:-webkit-autofill,
.contact__form-input:-webkit-autofill:hover, 
.contact__form-input:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px black inset;
}

.contact__form-input:-webkit-autofill {
    -webkit-text-fill-color: white;
}

.contact__form-input:-webkit-autofill:focus ~ .contact__form-label  {
  color: white;
}

.contact__form-input:hover, 
.contact__form-txt-area:hover {
  border-color: white;
}

.contact__form-input:focus, 
.contact__form-txt-area:focus {
  border-color: yellow;
}
.contact__form-label {
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  padding: 0 0.5rem;
  color: white;
  cursor: text;
  transition: top 0.25s ease-in, left 0.25s ease-in, font-size 0.25s ease-in;
  background: black;
      font-size: 16px;
}

.contact__form-input:focus ~ .contact__form-label,
.contact__form-input:not(:placeholder-shown).contact__form-input:not(:focus)
  ~ .contact__form-label {
  top: -0.4rem;
  font-size: 0.8rem;
  left: 0.9rem;
    background-color: black;
}

.contact__form-txt-area {
    width: 100%;
    height: 10rem;
    background: transparent;
    border: 2px solid white;
    color: white;
    padding: 1rem;
    font-family: 'SF Pro Display';
    font-weight: 200;
}

.contact__form-button {
    padding: .5rem 0;
}


@media only screen and (min-width: 768px) {



  .contact .contact__form,
.contact .contact__form:nth-child(5) {
  width: 40rem;
}
  .contact__form-txt-area {
    font-size: 16px;
  }
}
</style>
