import React,{useEffect,useState} from "react";
import Card from "../clientside/Card";
import Layout from "./Layout";
import axios from "axios";

const Profile = () => {

 const [userData, setUserData] = useState(null);
   useEffect(() => {
     decodeToken();
   }, []); 
  

    
       const decodeToken = () => {
         const token = localStorage.getItem("token");
         if (token) {
           const tokenParts = token.split(".");
           const encodedPayload = tokenParts[1];
           const decodedPayload = atob(encodedPayload);
           const userDetails = JSON.parse(decodedPayload);
             console.log("Logged in user details:", userDetails);
             console.log(userDetails.id)
             fetchUserData(userDetails.id);
         
         } else {
           console.log("No token found");
         }
       };
      const fetchUserData = async (userId) => {
        try {
        
          const response = await axios.get(`http://localhost:8090/user/${userId}`);
          setUserData(response.data); 
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
    
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                First Name:
              </label>
              <p className="text-gray-800">{userData.firstname}</p>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Last Name:
              </label>
              <p className="text-gray-800">{userData.lastname}</p>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Birthdate:
              </label>
              <p className="text-gray-800">{userData.birthdate}</p>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Country:</label>
              <p className="text-gray-800">{userData.country}</p>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email:</label>
              <p className="text-gray-800">{userData.email}</p>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Phone:</label>
              <p className="text-gray-800">{userData.phone}</p>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default Profile;
