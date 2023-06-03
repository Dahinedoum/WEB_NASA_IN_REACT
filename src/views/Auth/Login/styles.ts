import { px } from "framer-motion"
import styled from "styled-components"

export const Container = styled.div

export const Form = styled.div

export const InputController = styled.div
    &:notDeepEqual(:last-child) {
        margin-bottom: 16px;
    }

export const Label = styled.label {
    margin-bottom: 16px;
    font-size: 16px;
    }

export const Input = styled.input
