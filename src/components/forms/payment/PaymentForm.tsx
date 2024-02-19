import React, { Ref, useState } from 'react';
import './PaymentForm.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { CardLogo } from '../../../assets';
import Button from '../../buttons/Button';

type PaymentFormProps = {
  totalPrice: number;
  emptyCart: () => void;
  setSuccPayment: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: any;
};

type FormValue = {
  cardName: string;
  cardNum: number;
  cardDateMM: number;
  cardDateYY: number;
  cardCVV: number;
};

export default function PaymentForm({
  totalPrice,
  emptyCart,
  setSuccPayment,
  closeModal,
}: PaymentFormProps) {
  const total = Math.round(totalPrice);
  const {
    register,
    watch,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValue>();

  const handleInputChange = (e: any, num: number) => {
    const value = e.target.value;
    // Trim input to the first 3 characters
    e.target.value = value.slice(0, num);
  };
  const submitPayment = (data: any) => {
    console.log('Form Submitet', data);
    reset();
    emptyCart();
    setSuccPayment(true);
  };

  return (
    <>
      <form
        className="payment-form flex"
        onSubmit={handleSubmit(submitPayment)}
        noValidate
      >
        <label htmlFor="cardName">*Name on Card</label>
        <input
          placeholder="Mr.Buyer"
          type="text"
          id="cardName"
          {...register('cardName', {
            required: {
              value: true,
              message: 'Name is required!',
            },
          })}
        />
        <p className="errorMsg">{errors.cardName?.message}</p>
        <label htmlFor="cardNum">*Credit Card Number</label>

        <input
          placeholder="0000 0000 0000 0000"
          className="cardInp"
          type="number"
          inputMode="numeric"
          id="cardNum"
          {...register('cardNum', {
            required: 'Card number is required!',
          })}
          onInput={(e) => handleInputChange(e, 16)}
        />
        <p className="errorMsg">{errors.cardNum?.message}</p>

        <div className="card-flex">
          <label htmlFor="cardDate">*Expiry Date</label>
          <input
            placeholder="MM"
            className="cardInp"
            type="number"
            id="cardDateMM"
            {...register('cardDateMM', {
              required: 'Month is required!',
            })}
            onInput={(e) => handleInputChange(e, 2)}
          />
          <input
            placeholder="YY"
            className="cardInp"
            type="number"
            id="cardDateYY"
            {...register('cardDateYY', {
              required: 'Year is required!',
            })}
            onInput={(e) => handleInputChange(e, 2)}
          />
          <p className="errorMsg">{errors.cardDateYY?.message}</p>
          <p className="errorMsg">{errors.cardDateMM?.message}</p>
          <label htmlFor="cardCVV">*CVV</label>
          <input
            placeholder="XXX"
            className="cardInp"
            type="number"
            id="cardCVV"
            maxLength={3}
            {...register('cardCVV', {
              required: 'Card CVV is required!',
            })}
            onInput={(e) => handleInputChange(e, 3)}
          />
          <p className="errorMsg">{errors.cardCVV?.message}</p>
        </div>
      </form>
      <DevTool control={control} />
      <div className="credit-card">
        <div className="crd card-front ">
          <img src={CardLogo} alt="Card Logo" className="card-frontLogo" />

          <p className="card-frontName">{watch('cardName', 'Mr.Buyer')}</p>

          <p className="card-frontNum">{watch('cardNum')}</p>

          <span className="card-frontExp">
            <p>{watch('cardDateMM')}</p>
            <p>/</p>

            <p>{watch('cardDateYY')}</p>
          </span>
        </div>
        <div className="crd card-back">
          <p className="card-backCVV">{watch('cardCVV')}</p>
        </div>
      </div>
      <span className="confirmContainer">
        <Button onClick={handleSubmit(submitPayment)}> Pay {total}$</Button>

        <Button
          onClick={() => {
            closeModal(false);
          }}
        >
          Cancel
        </Button>
      </span>
    </>
  );
}
