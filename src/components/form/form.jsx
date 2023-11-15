import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import ButtonStyle from '../../utils/style/boutonstyle'
import '../../sass/components/_form.scss'
import '../../sass/components/_buttonstyle.scss'

export const Form = () => {
  const form = useRef()
  const dialog = useRef()

  const handleSendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_g9v4cvy',
        'template_r0xirue',
        form.current,
        'XPl0FQOrTSCNdoxnk',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.error(error.text)
        },
      )
    document.forms['form'].reset()
    dialog.current.showModal()
  }

  const closeHandler = () => {
    dialog.current.close()
  }

  return (
    <div className="container">
      <dialog className="dialog" ref={dialog}>
        <button className="dialog__button" type="button" onClick={closeHandler}>
          X
        </button>
        <p>Votre message a bien été envoyé.</p>
      </dialog>
      <form name="form" className="form" ref={form} onSubmit={handleSendEmail}>
        <label className="form__label" htmlFor="lastname">
          Nom
        </label>
        <input
          className="form__input"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Votre nom"
          required
          onInvalid={(F) =>
            F.target.setCustomValidity('Veuillez entrer votre nom')
          }
          onInput={(F) => F.target.setCustomValidity('')}
        />
        <label className="form__label" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="form__input"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Votre prénom"
          required
          onInvalid={(F) =>
            F.target.setCustomValidity('Veuillez entrer votre prénom')
          }
          onInput={(F) => F.target.setCustomValidity('')}
        />
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          required
          onInvalid={(F) =>
            F.target.setCustomValidity('Veuillez entrer votre adresse email')
          }
          onInput={(F) => F.target.setCustomValidity('')}
        />
        <label className="form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form__textarea"
          id="message"
          name="message"
          placeholder="Votre message"
          required
          onInvalid={(F) =>
            F.target.setCustomValidity('Veuillez entrer votre message')
          }
          onInput={(F) => F.target.setCustomValidity('')}
          rows="10"
        />
        <ButtonStyle />
        <button className="form__button theme-color" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default Form
