import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <ul>
            <li>Countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>
            <li>Places of interest</li>
        </ul>
        <ul>
            <li>Homes</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>Villas</li>
            <li>Hostels</li>
            <li>B&Bs</li>
            <li>Guest houses</li>
        </ul>
        <ul>
            <li>Unique places to stay</li>
            <li>All destinations</li>
            <li>Discover</li>
            <li>Reviews</li>
            <li>Unpacked: Travel articles</li>
            <li>Travel Communities</li>
            <li>Seasonal and holiday deals</li>
        </ul>
        <ul>
            <li>Car hire</li>
            <li>Flight finder</li>
            <li>Restaurant reservations</li>
            <li>Booking.com for Travel Agents</li>
        </ul>
        <ul>
            <li>Coronavirus (COVID-19) FAQs</li>
            <li>About Booking.com</li>
            <li>Customer Service help</li>
            <li>Partner help</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Press centre</li>
            <li>Safety resource centre</li>
            <li>Investor relations</li>
            <li>Terms & Conditions</li>
            <li>Partner dispute</li>
            <li>How we work</li>
            <li>Privacy & Cookie Statement</li>
            <li>MSA Statement</li>
            <li>Corporate contact</li>
        </ul>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
    width: 100%;
    height: auto;
    display: flex;
    background: #f4f4f4;
    justify-content: space-between;
    padding: 2%;
    ul{
        list-style-type: none;
        color: #00224f;
        li{
            margin-top: 2%;
        }
    }
`