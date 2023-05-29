import {FC} from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { getNasaPhotos } from "../../services/nasa";

const Dashboard : FC =  () => {

   getNasaPhotos()
   return (
      <Header />

   )
}

export default Dashboard;
