
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoUpButton from './GoUpBtn';

const SubCouncilsList = () => {
    const [subCouncils, setSubCouncils] = useState([]);


    useEffect(() => {
        const fetchSubCouncils = async () => {
            const db = getFirestore();
            const subCouncilsCollection = collection(db, 'subcouncils');
            const snapshot = await getDocs(subCouncilsCollection);
            const subCouncilsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setSubCouncils(subCouncilsData);
            // Initialize AOS after data is loaded
            AOS.init();
        };

        fetchSubCouncils();
    }, []);



    return (
        <>
            <GoUpButton />
            <h2 className="text-5xl text-center py-10 mb-6 text-green-800">Find Your Ideal Subcouncil</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {subCouncils.map(subCouncil => (
                    <div key={subCouncil.id} className="bg-white p-6 flex flex-col items-center justify-center mb-8 rounded-md shadow-md"
                        data-aos="zoom-in"
                        data-aos-duration="700">
                        <img src={subCouncil.image} alt={subCouncil.Name} className="mb-4 rounded-md w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{subCouncil.Name}</h2>
                            <p className="text-gray-600">{subCouncil.about}</p>
                            <Link to={subCouncil.link}>Read More...</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SubCouncilsList;
