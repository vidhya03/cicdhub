import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Alert, Col, Row } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <h1 className="display-4">
          <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
        </h1>
        <p className="lead">
          <Translate contentKey="home.subtitle">This is your homepage</Translate>
        </p>
        {account?.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>
              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix" />
            </Alert>
          </div>
        )}
        <p>
          <Translate contentKey="home.question" />
        </p>

        <ul>
          <li>
            <a href="https://luma.com/user/usr-QCz6Qs4weRb1bIc" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.homepage">View Meetup Details</Translate>
            </a>
          </li>
          <li>
            <a href="https://github.com/vidhya03/cicdhub" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.stackoverflow">Star us on GitHub</Translate>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vidhyadharan/" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.bugtracker">Connect with Vidhyadharan on LinkedIn</Translate>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aravindhanannamalai/" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.chat">Connect with Aravindhan on LinkedIn</Translate>
            </a>
          </li>
          <li>
            <a href="https://luma.com/user/usr-QCz6Qs4weRb1bIc" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.follow">Join Our DevOps Community</Translate>
            </a>
          </li>
        </ul>

        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
          <h5>
            <Translate contentKey="home.qr.title">Connect with Our Presenters</Translate>
          </h5>
          <p>
            <Translate contentKey="home.qr.message">Scan the QR codes to connect on LinkedIn</Translate>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Vidhyadharan</p>
              <img
                src="content/images/vidhya.png"
                alt="Vidhyadharan LinkedIn QR Code"
                style={{ maxWidth: '200px', border: '2px solid #0077b5', borderRadius: '8px' }}
              />
            </div>
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Aravindhan</p>
              <img
                src="content/images/aravind.png"
                alt="Aravindhan LinkedIn QR Code"
                style={{ maxWidth: '200px', border: '2px solid #0077b5', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>

        <p style={{ marginTop: '2rem' }}>
          <Translate contentKey="home.like" />{' '}
          <a href="https://github.com/vidhya03/cicdhub" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          !
        </p>
      </Col>
    </Row>
  );
};

export default Home;

// Made with Bob
