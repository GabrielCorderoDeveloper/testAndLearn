import { useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Schema } from 'zod/lib';

const schema = z.object({
    name: z.string().min(3),
    age: z.number({invalid_type_error: 'Age field is required.'}).min(18)
})

type FormData = z.infer<typeof schema>;

const Form = () => {
    const { register, handleSubmit, formState: {errors} ,
} = useForm<FormData>({resolver: zodResolver(schema)});

    console.log(register('name'));

    const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className='form-label'>Name</label>
        <input 
         { ...register('name')}
         id='name' type="text" className='form-control'/>
         {/* //2?--------------------------------------------------> */}
         {errors.name && <p className='text-danger'>{errors.name.message}</p>}
    

      </div>
      <div className="mb-3"><label htmlFor="age" className="form-label">Age</label>
      <input { ...register('age', {valueAsNumber: true})} id='age' type="number" className="form-control" /></div>
      {errors.age && <p className='text-danger'>{errors.age.message}</p>}

      <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default Form
