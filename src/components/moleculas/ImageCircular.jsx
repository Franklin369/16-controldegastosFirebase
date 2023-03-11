import {ContentRadius} from "../atomos/ContentRadius"
import {Image} from "../atomos/Image"
export function ImageCircular({height,width,radius,marginRight}) {
  return (
  <ContentRadius height={height} width={width} radius={radius} marginRight={marginRight}>
  
    <Image source="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UX1000_.jpg"  altText="imagenUser"/>
  </ContentRadius>
  );
}

