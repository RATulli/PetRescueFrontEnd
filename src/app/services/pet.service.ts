import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';
import { LoadPet } from '../models/load-pet';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiUrl = 'localhost:8081/image/analize-image';
  private petList = new Array<Pet>();
  private petId =0;
  public category: string;

  constructor(private http: HttpClient) {
    this.category = "none"; 
    this.petList.push({
      id:'1', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'2', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'3', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'5', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'6', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'7', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'8', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'9', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'10', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'11', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'12', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'13', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'14', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'15', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'16', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'17', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'18', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'19', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'20', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'21', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'22', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'23', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'24', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'25', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'26', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'27', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'28', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'29', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'30', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'31', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'32', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'33', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'34', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'35', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'36', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'37', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'38', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'39', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'40', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'41', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'42', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'43', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'44', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'45', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'46', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'47', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'48', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'49', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'50', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'51', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'52', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'53', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'54', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'55', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'56', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'57', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'58', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'59', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'60', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'61', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'62', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'63', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'64', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'65', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'66', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'67', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'68', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'69', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'70', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'71', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'72', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'73', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'2', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'3', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'5', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'6', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'7', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'8', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'1', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'2', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'3', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'5', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'6', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'7', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'8', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'1', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'2', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'3', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'5', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'6', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'7', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'8', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'1', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'2', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'3', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'5', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'6', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'7', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'8', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'1', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'2', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'3', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'5', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'6', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'7', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'8', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'1', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'2', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'3', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'5', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'6', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'7', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'8', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    this.petList.push({
      id:'1', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
      typepet:'Cat',
      breedpet:'none', 
    });
    this.petList.push({
      id:'2', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/ee/99/83/ee9983a262e545d8ed1413ec1532f03b.jpg',
      typepet:'Cat',
      breedpet:'Siamese',
    });
    this.petList.push({
      id:'3', 
      namePet:'Pet03ng',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
      typepet:'Dog',
      breedpet:'Beagle',
    });
    this.petList.push({
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
      typepet:'Dog',
      breedpet:'none',
    });
    this.petList.push({
      id:'5', 
      namePet:'Nana',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
      typepet:'Dog',
      breedpet:'Pitbull',
    });
    this.petList.push({
      id:'6', 
      namePet:'Macavity',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
      typepet:'Cat',
      breedpet:'none',
    });
    this.petList.push({
      id:'7', 
      namePet:'Pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://i.pinimg.com/originals/6a/ab/13/6aab13a7a20a70697251716cf0baffc9.jpg',
      typepet:'Dog',
      breedpet:'St Bernard',
    });
    this.petList.push({
      id:'8', 
      namePet:'Pet06',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/03/30/Recortada/img_jgost_20180330-215020_imagenes_md_otras_fuentes_bosque_de_noruega-092-kF0C--980x554@MundoDeportivo-Web.jpg',
      typepet:'Cat',
      breedpet:'Norwegian Forest',
    });
    
  }
  
  getAllPets()
  {
    return this.petList;
  }

  getById(petId: string)
  {
    let mypets= this.petList.filter(pet =>{
      return (pet.id == petId);
    });
    return (mypets.length >0) ? mypets[0]: null;
  }    

  getAllPetsByCats(){
    return this.getAllPets().filter(Pet => Pet.typepet== "Cat");
  }
  
  getAllPetsByDogs(){
    return this.getAllPets().filter(Pet => Pet.typepet== "Dog");
  }


  upLoadPet(pet: LoadPet): Promise<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post(this.apiUrl, pet, httpOptions).toPromise();
  }

  
}
