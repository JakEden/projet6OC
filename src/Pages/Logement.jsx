import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Dropdown from '../Components/Dropdown';
import apartmentsData from '../data/logements.json';
import { useParams } from 'react-router-dom';
import '../styles/Logement.scss';
import Carousel from '../Components/Carousel';

function Logement() {
    const { id } = useParams();
    const apartment = apartmentsData.find(logement => logement.id === id);


    const equipmentsLogement = apartment?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>;
    });

    return (
        <div>
            <Header />
            <Carousel images={apartment.pictures} />
            {
                    <div className="appartementInformation">
                        <div className="proprietorAndApartement">
                            <div className="informationApartement">
                                <span className="title">{apartment?.title}</span>
                                <span className="location">{apartment?.location}</span>

                            </div>

                                <div className="proprietorInfo">
                                    <span className="name">{apartment?.host.name}</span>
                                    <img className="picture" src={apartment?.host.picture} alt="Propriétaire" />
                                </div>

                        </div>
                        <div className="description-equipements">
                          <div className="descriptionDropdown">   <Dropdown titre="Description" description={apartment?.description} /></div>
                          <div className="equipmentDropdown"> <Dropdown titre="Équipements" description={equipmentsLogement} /></div>
                        </div>
                    </div>    
            }
            <Footer />
        </div>
    );
}

export default Logement;
