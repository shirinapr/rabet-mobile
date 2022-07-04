import { Horizon } from 'stellar-sdk';
import React, { useState } from 'react';

import Image from 'components/common/Image';
import formatBalance from 'utils/formatBalance';
import handleAssetAlt from 'utils/handleAssetAlt';
import ScrollBar from 'components/common/ScrollBar';
import handleAssetsKeys from 'utils/handleAssetKeys';
import handleAssetImage from 'utils/handleAssetImage';
import useTypedSelector from 'hooks/useTypedSelector';
import questionLogo from 'public/images/question-circle.png';

import * as S from './styles';

type AppProps = {
  assets: Horizon.BalanceLine[];
  close: () => void;
  onChange: (value: Horizon.BalanceLine) => void;
  valueName?: string;
};

const SearchAsset = ({
  assets,
  close,
  onChange,
  valueName,
}: AppProps) => {
  const [searchString, setSearchString] = useState('');
  const assetImages = useTypedSelector((store) => store.assetImages);

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const filteredCurrencies = assets.filter((asset) =>
    new RegExp(searchString, 'i').test(asset.asset_code),
  );

  const handleClick = (asset: Horizon.BalanceLine) => {
    onChange(asset);

    close();
  };

  const handleShowDomain = (asset: Horizon.BalanceLine) => {
    const foundAssetImage = assetImages.find(
      (assetImage) =>
        assetImage.asset_code === asset.asset_code &&
        assetImage.asset_issuer === asset.asset_issuer,
    );

    if (foundAssetImage && foundAssetImage.domain) {
      return foundAssetImage.domain;
    }

    if (asset.domain) {
      return asset.domain;
    }

    return '';
  };

  return (
    <>
      <S.InputSearch
        type="text"
        value={searchString}
        onChange={(e) => handleChange(e)}
        placeholder="&#xe915;  Search assets"
      />

      <ScrollBar isHidden maxHeight={400}>
        {filteredCurrencies.map((asset) => (
          <S.ListItem
            key={`${valueName}-${handleAssetsKeys(asset)}`}
            onClick={() => {
              handleClick(asset);
            }}
          >
            <S.Asset>
              <Image
                fallBack={questionLogo}
                alt={handleAssetAlt(asset)}
                src={handleAssetImage(asset, assetImages)}
              />

              <div>
                <S.AssetName>{asset.asset_code || 'XLM'}</S.AssetName>

                <S.AssetInfo>{handleShowDomain(asset)}</S.AssetInfo>
              </div>
            </S.Asset>
            <S.AssetPrice>
              {formatBalance(asset.balance)}
            </S.AssetPrice>
          </S.ListItem>
        ))}

        {!filteredCurrencies.length ? (
          <div className="flex items-center justify-center h-[115px]">
            Asset not found
          </div>
        ) : null}
      </ScrollBar>
    </>
  );
};

SearchAsset.defaultProps = {
  valueName: '',
};

export default SearchAsset;
