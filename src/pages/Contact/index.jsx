import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../colors";
import Title from "../../components/Layout/title";
import emailjs from '@emailjs/browser';
import cv from '../../assets/CV.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto;
`;

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  @media (max-width : 900px) {
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
`

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  @media (max-width : 900px) {
    align-items: center;
    padding: 0 20px;
    max-width: 400px;
  }
  @media (max-width: 500px) {
    max-width: 250px;
  }
  @media (max-width: 300px) {
    max-width: 200px;
  }
`;

const Aside = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 900px) {
    display: none;
  }
`

const Banner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100px;
  background-image: url(/images/mountains.jpg);
  background-size: cover;
  background-position-y: 50%;
  display: none;
  @media (max-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const DlWrapper = styled.div`
transition: 0.2s;
  position: absolute;
  bottom: -50px;
  left: 25%;
  background-color: ${colors.secondary_variant};
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  &:hover{
    transform: scale(1.1);
    font-weight: bolder;
  }
`

const Download = styled.a`
  text-decoration: none;
  color: ${colors.primary};
`

const BannerDownload = styled.a`
transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${colors.primary};
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  &:hover{
      transform: scale(1.05);
    }
`

const Vitae = styled.img`
  width: 100%;
  max-width: 400px;
`

const FormHeading = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  height: 100%;
  @media (max-width: 678px){
    max-width: 400px;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 22px;
  &:focus {
    color: ${colors.primary_variant};
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 15px;
  height: 30px;
  border-radius: 25px;
  border-style: solid;
`;

const TextInput = styled.textarea`
  padding: 15px;
  min-height: 100px;
  border-radius: 25px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input``;

const Disclaimer = styled.p`
  font-size: 12px;
  font-weight: 500;
`

const SubmitButton = styled.button`
  width: 50%;
  border-radius: 5px;
  padding: 10px;
  background-color: ${colors.secondary_variant};
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    color: ${colors.secondary_variant};
    background-color: lightgray;
    border: 1px solid ${colors.secondary_variant};
    cursor: not-allowed;
  }
`;

const serviceKey = process.env.REACT_APP_SERVICE_KEY;
const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
const userKey = process.env.REACT_APP_USER_KEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs
    .send(
      serviceKey,
      templateKey,
      templateParams,
      userKey
    )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.text);

          // Reset form fields
          setName("");
          setEmail("");
          setMessage("");
          setIsChecked(false);
          window.alert('Votre Message a bien été envoyé !')
        },
        (error) => {
          window.alert("Message non envoyé", error.text);
        }
      );
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Title content="Me contacter" />
      <PageWrapper>
        <FormWrapper>
          <FormHeading>Une question ? Une mission ?</FormHeading>
          <Disclaimer>* Champs obligatoires</Disclaimer>
          <StyledForm onSubmit={handleSubmit}>
            <LabelWrapper>
              <Label>
                Nom* :
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Label>
              <Label>
                Email* :
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Label>
            </LabelWrapper>
            <Label>
              Message* :
              <TextInput
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Label>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                required
              />
              J'ai vérifié, tout est bon
            </CheckboxLabel>
            <SubmitButton type="submit" disabled={!isChecked}>
              Envoyer !
            </SubmitButton>
          </StyledForm>
        </FormWrapper>
        <Aside>
          <Download href={cv} download="CV_Jordan_Sankare" >
            <Vitae src={cv} />
          </Download>
          <DlWrapper>
            <Download href={cv} download >Télécharger le CV</Download>
          </DlWrapper>
        </Aside>
        <Banner>
        <BannerDownload href={cv} download >Télécharger le CV</BannerDownload>
        </Banner>
      </PageWrapper>
    </Container>
  );
};

export default Contact;
