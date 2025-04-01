import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
  background-color: #2a2d34;

  h2 {
    color: rgb(168, 137, 253);
  }
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateCard = styled.div`
  background-color: #1a1a1d;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const CertificateTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
  color: #fff;
`;

const CertificateInstitution = styled.p`
  font-size: 1rem;
  color: #8a9ba8;
  margin: 5px 0;
`;

const Certificates = () => {
  return (
    <SectionContainer id="certificates">
      <h2>Certificados</h2>
      <CertificatesGrid>
        <CertificateCard>
          <CertificateImage src="/banco.jpg" alt="Certificado Banco de Dados" />
          <CertificateTitle>Implementando Banco de Dados</CertificateTitle>
          <CertificateInstitution>Fundação Bradesco</CertificateInstitution>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="/python.jpg" alt="Certificado Python" />
          <CertificateTitle>Criando um Projeto com Interface Gráfica Utilizando a Linguagem Python</CertificateTitle>
          <CertificateInstitution>Fundação Bradesco</CertificateInstitution>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="/powerbi.jpg" alt="Certificado PowerBi" />
          <CertificateTitle>Análise de dados com PowerBI</CertificateTitle>
          <CertificateInstitution>Fundação Bradesco</CertificateInstitution>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="/frontend.png" alt="Certificado Frontend" />
          <CertificateTitle>Frontend Web com ReactJS</CertificateTitle>
          <CertificateInstitution>Samsung Ocean</CertificateInstitution>
        </CertificateCard>

        <CertificateCard>
          <CertificateImage src="/backend.png" alt="Certificado Backend" />
          <CertificateTitle>Backend com NodeJS e Express</CertificateTitle>
          <CertificateInstitution>Samsung Ocean</CertificateInstitution>
        </CertificateCard>
      </CertificatesGrid>
    </SectionContainer>
  );
};

export default Certificates;
