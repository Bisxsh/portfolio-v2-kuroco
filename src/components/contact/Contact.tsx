import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ConfirmableButton from "./components/ConfirmableButton";
import { EnterWithFade } from "../../util/FramerMotion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const options = {
    name: { required: true, pattern: /^[A-Za-z ]+$/i },
    email: { required: "An email address is required" },
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [message, setMessage] = useState<String>();
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const [messageSent, setMessageSent] = useState(false);

  function constructEmail(data: any) {
    return {
      to_name: "Bisesh",
      from_name: data.name,
      message: message,
      reply_to: data.email,
    };
  }

  const sendEmail = (e: any) => {
    if (messageSent) return;
    setMessageSent(true);
    return emailjs.send(
      "service_xasw9ak",
      "template_92mu72i",
      constructEmail(e),
      "bD_OMS6xSFT0bgbHS"
    );
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [message]);

  return (
    <div>
      <motion.h2 {...EnterWithFade(0)} className="section-heading">
        Contact Me
      </motion.h2>
      <EmailContainer>
        <h3>Send me a message!</h3>
        <h5>Got any questions or just want to say hello? Go ahead! 😄</h5>

        <FormContainer onSubmit={handleSubmit(sendEmail)}>
          <div className="form--upper">
            <div className="form--small left">
              <label>Your name</label>
              <input type="text" {...register("name", options.name)} />
            </div>

            <div className="form--small right">
              <label>Your email</label>
              <input type="email" {...register("email")} />
            </div>
          </div>

          <div className="form--message">
            <label>Your message</label>
            <textarea
              {...register("message")}
              ref={textareaRef}
              onChange={textAreaChange}
            >
              {message}
            </textarea>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ConfirmableButton sent={messageSent}>
              <input
                className="submit-form"
                type="submit"
                style={{ cursor: "pointer" }}
              />
            </ConfirmableButton>
          </motion.div>
        </FormContainer>
      </EmailContainer>
    </div>
  );
};

const EmailContainer = styled.div`
  padding: 5vw;
  width: 60vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--standard-shadow);
  z-index: 1;
  margin: 5vh 0;

  @media screen and (max-width: 700px) {
    width: 90vw;
    transform: translateY(0px);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  color: var(--color-accent);
  h3 {
    color: var(--color-accent);
    margin-bottom: 20px;
  }

  h5,
  label {
    font-weight: 300;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  label {
    align-self: flex-start;
    font-size: var(--font-s);
    opacity: 0.5;
    margin-bottom: 10px;
  }

  .form--upper {
    width: 100%;
    padding: 0 30px;
    margin-bottom: 30px;

    @media screen and (min-width: 1200px) {
      flex-direction: row;
      .left {
        margin-right: 30px;
      }

      .right {
        margin-left: 30px;
      }
    }
  }

  .form--small {
    width: 100%;
    margin-block: 10px;
    &,
    & > input {
      width: 100%;
    }
  }

  .form--message {
    &,
    textarea {
      width: 100%;
    }
    padding: 0 30px;
  }

  //Reset styles
  input,
  textarea,
  input:focus {
    outline: none;
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
  }

  input,
  textarea {
    border-bottom: 1px solid var(--color-accent);
    font-size: var(--font-xl);
    overflow: auto;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }

  input:focus {
    border-bottom: 1px solid var(--color-accent);
  }
`;

export default Contact;
