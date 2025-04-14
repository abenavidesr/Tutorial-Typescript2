export class Serie {
    numero: number;
    name: string;
    seasons: number;
    channel: string;
    description: string;
    image: string;
    url: string;
  
    constructor(numero: number, name: string, channel: string, seasons: number, description: string, url: string, image: string) {
      this.channel = channel;
        this.name = name;
        this.numero = numero;
        this.seasons = seasons;
        this.description = description;
        this.image = image;
        this.url = url;
    }
  }