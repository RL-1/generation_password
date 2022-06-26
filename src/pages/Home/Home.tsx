import { Button, Input, Slider, Switch } from '@mui/material'
import React, { useState } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { changeLenghtPassword, changePassword, generatorPassword } from './redux/generatorSlice'
import './styles.css'

import { VariantType, useSnackbar } from 'notistack';

export interface SymbolTypeBoolean {
    lowerCase: boolean
    symbol: boolean
    number: boolean
    upperCase: boolean
}
export const Home: React.FC = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const dispatch = useAppDispatch()
    const password = useAppSelector((state: RootState) => state.home.password)
    const len = useAppSelector((state: RootState) => state.home.len)
    const { enqueueSnackbar } = useSnackbar();

    const [symbolSwiper, setSymbolSwiper] = useState<SymbolTypeBoolean>({
        lowerCase: false,
        upperCase: false,
        symbol: false,
        number: false
    })

    const handleChangePassword = (e: string) => {
        dispatch(changePassword(e))
    }

    const handleGeneratePassword = () => {
        dispatch(generatorPassword(symbolSwiper))
    }

    const handleChangeLenght = (e: number) => {
        dispatch(changeLenghtPassword(e))
    }

    const handlePasswordCopy = (variant: VariantType) => {
        if (password.length > 0) {
            navigator.clipboard.writeText(password)
            return enqueueSnackbar('Success', { variant });
        }
        return enqueueSnackbar('Error, password min length password 1', { variant });
    }

    const handleAddSymbol = (e: string) => {
        setSymbolSwiper({ ...symbolSwiper, [e]: !symbolSwiper[e] })
    }

    return (
        <div className={'container'}>
            <div className={'box'}>
                <div className={'title'}>
                    <h2>Generator Password</h2>
                </div>
                <div className={'password'}>
                    <input
                        className={'input__password'}
                        value={password}
                        onChange={(e) => handleChangePassword(e.target.value)}
                    />
                </div>
                <div className={'len__selected'}>
                    <input
                        className={'password__len'}
                        type='number'
                        value={len}
                        onChange={(e) => handleChangeLenght(Number(e.target.value))}
                    />
                    <Slider
                        aria-label="Temperature"
                        defaultValue={len}
                        color="secondary"
                        onChange={(e: any) => handleChangeLenght(e.target.value)}
                    />
                </div>
                <div className={'swiper'}>
                    {Object.keys(symbolSwiper).map(((item: string) =>
                        <div className={'switch__item'}>
                            <span>{item}</span>
                            <Switch {...label} checked={symbolSwiper[item]} onClick={() => handleAddSymbol(item)} />
                        </div>
                    ))}
                </div>
                <div className={'button'}>
                    <Button variant='contained' onClick={handleGeneratePassword}>generate</Button>
                    <Button
                        variant='contained'
                        color='success'
                        onClick={() => handlePasswordCopy(password.length > 0 ? 'success' : 'error')}
                    >
                        copy
                    </Button>
                </div>
            </div>
        </div>
    )
}
