import React from 'react';
import SearchInput from './form/searchInput/SearchInput';
import ButtonSubmit from './form/buttonSubmit/ButtonSubmit';
import { FormStyle } from './Form.styles';
import { useForm, SubmitHandler } from 'react-hook-form';

export type Inputs = {
  search: string;
};

//interface Props {}

const Form = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form name="searchUser" onSubmit={handleSubmit(onSubmit)}>
      <FormStyle>
        <SearchInput register={register} />
        <ButtonSubmit />
      </FormStyle>
    </form>
  );
};

export default Form;
