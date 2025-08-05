import React from "react";

type Props = {
  infos: Services;
};

const Card: React.FC<Props> = ({ infos }) => {
  return (
    <div className="flex flex-col justify-center bg-[var(--color-tertiary)] p-3 rounded-lg shadow-md space-y-5 lg:space-y-8 w-full sm:w-3/4 lg:w-auto">
      <div className="flex items-center gap-3">
        <img src={infos.icon} alt="" />
        <h3 className="text-xl max-lg:text-lg text">{infos.title}</h3>
      </div>
      <p className="text-sm text-start">{infos.description}</p>
      <div className="space-y-3">
        <h4 className="text-xs text-[var(--color-accent)]">
          PRINCIPAIS SERVIÇOS
        </h4>
        <div className="flex flex-wrap gap-2">
          {infos.services.map((service, index) => (
            <p
              key={index}
              className="text-xs bg-[var(--color-secondary)] rounded-xl items-center justify-center p-2"
            >
              {service}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
