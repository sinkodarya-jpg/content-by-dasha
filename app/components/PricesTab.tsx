"use client";
import Image from "next/image";
import styles from './PricesTab.module.scss';

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
    <section className={styles.prices}>
      {pricingCards.map((card, cardIndex) => {
        const selectedOption = selectedOptions[cardIndex];
        const currentOption = card.options[selectedOption];

        return (
          <article
            key={card.title}
            className={styles.priceCard}
            style={{ borderColor: card.accent }}
          >
            {/* Image */}
            <div className={styles.priceImage}>
              <Image
                src={card.image}
                alt=""
                width={800}
                height={180}
                className={styles.coverImage}
              />
            </div>

            {/* Content */}
            <div className={styles.priceContent}>

              {/* Title */}
              <div className={styles.priceTitle}>
                <Image
                  src={card.titleImage}
                  alt={card.title}
                  width={400}
                  height={110}
                />
              </div>

              {/* Switcher */}
              <div className={styles.priceOptions}>
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
                      className={styles.priceOption}
                    >
                      <span className={styles.priceOptionInner}>

                        <span
                          className={`${styles.optionHighlight} ${
                            isHighlighted
                              ? styles.optionHighlighted : ""
                          }`}
                          style={{
                            backgroundColor: highlightColor,
                          }}
                        >
                          <span
                            className={`${styles.optionRight} ${
                              isHighlighted
                                ? styles.optionMarkerVisible : ""
                            }`}
                          />
                        </span>

                        <span
                          className={`${styles.optionLeft} ${
                            isHighlighted
                              ? styles.optionMarkerVisible : ""
                          }`}
                        />

                        <span className={styles.optionLabel}>
                          {option.label}
                        </span>

                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Price */}
              <p className={styles.priceValue}>
                Price: {currentOption.price}
              </p>

              {/* Tagline */}
              <p className={styles.tagline}>
                <span
                  style={{
                    backgroundColor: card.accent,
                  }}
                >
                 {currentOption.tagline}
                </span>
              </p>

              {/* Features */}
              <ul className={styles.features}>
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
