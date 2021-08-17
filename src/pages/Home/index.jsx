import React, { useState } from "react"
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon'
import Slider from "react-slick";

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map } from '../../components'

import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle } from './styles'

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [query, setQuery] = useState(null)
    const [modalOpened, setModalOpened] = useState(true)

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
      }

      function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue)
        }
      }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurant" />
                    <TextField
                        label='Pesquisar Restaurantes'
                        outlined
                        //onTrailingIconSelect={() => this.setState({ value: '' })}
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="Nome qualquer"/>
                        <Card photo={restaurante} title="Nome qualquer"/>
                        <Card photo={restaurante} title="Nome qualquer"/>
                        <Card photo={restaurante} title="Nome qualquer"/>
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map query={query}/>
            {/*<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>*/}
        </Wrapper>
    )
}

export default Home