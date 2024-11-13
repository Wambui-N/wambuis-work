
import React from 'react';
import services from '@/data/services.json';

const Services = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="border-b border-black">
          <tr>
            <th className='w-1/4'>Service</th>
            <th className='w-1/2 px-4'>Description</th>
            <th className='w-1/4'>What You'll Get</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr className="border-b border-black" key={service.id}>
              <td>{service.title}</td>
              <td className='px-4'>{service.description}</td>
              <td>
                <ul className="list-none text-sm">
                  {service.benefits.map((benefit, index) => (
                    <li className='py-1' key={index}>{benefit}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
