'use client';

export default function QuoteForm({
  skucode,
  thumbnail,
  boothsize,
  categorySlug,
  detailSlug,
}) {
  console.log(skucode, thumbnail, boothsize, categorySlug, detailSlug);
  const handleSubmit = (e) => {
    e.preventDefault();
    const quotedta = {
      skucode,
      imagecode: thumbnail,
      boothsize,
    };
    localStorage.setItem('quotedata', JSON.stringify(quotedta));
    const targetCategory =
      categorySlug || (boothsize ? `${boothsize}-trade-show-booth` : '');
    const targetDetail =
      detailSlug || (skucode ? skucode.toLowerCase() : '');

    if (targetCategory && targetDetail) {
      window.location.href = `/${targetCategory.replace(
        /^\/+/,
        ''
      )}/${targetDetail.replace(/^\/+/, '').toLowerCase()}/`;
    } else if (targetCategory) {
      window.location.href = `/${targetCategory.replace(/^\/+/, '')}/`;
    } else {
      window.location.href = '/';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="skucode" value={skucode} />
      <input type="hidden" name="imagecode" value={thumbnail} />
      <input type="hidden" name="boothsize" value={boothsize} />
      <input type="hidden" name="categorySlug" value={categorySlug} />
      <input type="hidden" name="detailSlug" value={detailSlug} />
      <input type="submit" name="submit" value="GET QUOTE" />
    </form>
  );
}