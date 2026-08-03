"use client";

type PriceOption = 0 | 1 | 2;

type PricingCard = {
  title: string;
  image: string;
  titleImage: string;
  accent: string;
  options: {
    label: string;
    price: string;
    tagline: string;
    features: string[];
  }[];
};

type HoveredOption = {
  cardIndex: number;
  optionIndex: number;
} | null;

type Props = {
  pricingCards: PricingCard[];
  selectedOptions: PriceOption[];
  hoveredOption: HoveredOption;
  setHoveredOption: React.Dispatch<
    React.SetStateAction<HoveredOption>
  >;
  selectOption: (
    cardIndex: number,
    optionIndex: PriceOption
  ) => void;
};

export default function PricesTab({
  pricingCards,
  selectedOptions,
  hoveredOption,
  setHoveredOption,
  selectOption,
}: Props) {
  return (
    <section className="grid grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-4">
      {pricingCards.map((card, cardIndex) => {
        const selectedOption = selectedOptions[cardIndex];
        const currentOption = card.options[selectedOption];

        return (
          <article
            key={card.title}
            className="w-full overflow-hidden border"
            style={{ borderColor: card.accent }}
          >
            {/* Image */}
            <div className="h-[90px] w-full overflow-hidden">
              <img
                src={card.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-4 pb-6">

              {/* Title */}
              <div className="flex h-[70px] items-center justify-center">
                <img
                  src={card.titleImage}
                  alt={card.title}
                  className="max-h-[55px] max-w-[75%] object-contain"
                />
              </div>

              {/* Switcher */}
              <div className="grid grid-cols-3 items-center">
                {card.options.map((option, optionIndex) => {
                  const isSelected =
                    selectedOption === optionIndex;

                  const isHovered =
                    hoveredOption?.cardIndex === cardIndex &&
                    hoveredOption?.optionIndex === optionIndex;

                  const isHighlighted =
                    isSelected || isHovered;

                  const highlightColor = isSelected
                    ? card.accent
                    : isHovered
                    ? `${card.accent}80`
                    : "transparent";

                  return (
                    <button
                      key={option.label}
                      onClick={() =>
                        selectOption(
                          cardIndex,
                          optionIndex as PriceOption
                        )
                      }
                      onMouseEnter={() =>
                        setHoveredOption({
                          cardIndex,
                          optionIndex,
                        })
                      }
                      onMouseLeave={() =>
                        setHoveredOption(null)
                      }
                      className="relative flex justify-center py-1"
                    >
                      <span className="relative inline-block px-2 py-0.5">

                        <span
                          className={`absolute left-0 top-0 h-full overflow-visible transition-[width] duration-500 ease-out ${
                            isHighlighted
                              ? "w-full"
                              : "w-0"
                          }`}
                          style={{
                            backgroundColor: highlightColor,
                          }}
                        >
                          <span
                            className={`absolute right-0 top-0 h-full w-px bg-black transition-opacity duration-100 ${
                              isHighlighted
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />

                          <span
                            className={`absolute -right-[3px] -top-[3px] h-[6px] w-[6px] rounded-full bg-black transition-opacity duration-100 ${
                              isHighlighted
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                        </span>

                        <span
                          className={`absolute left-0 top-0 h-full w-px bg-black transition-opacity duration-100 ${
                            isHighlighted
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />

                        <span
                          className={`absolute -bottom-[3px] -left-[3px] h-[6px] w-[6px] rounded-full bg-black transition-opacity duration-100 ${
                            isHighlighted
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />

                        <span className="relative z-10 whitespace-nowrap text-sm lowercase">
                          {option.label}
                        </span>

                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Price */}
              <p className="mt-7 font-bold">
                Price: {currentOption.price}
              </p>

              {/* Tagline */}
              <p className="mt-6 text-base leading-snug">
                <span
                  className="box-decoration-clone px-0.5"
                  style={{
                    backgroundColor: card.accent,
                  }}
                >
                  Tagline: {currentOption.tagline}
                </span>
              </p>

              {/* Features */}
              <ul className="mt-6 list-disc space-y-0.5 pl-5 text-sm leading-snug">
                {currentOption.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

            </div>
          </article>
        );
      })}
    </section>
  );
}