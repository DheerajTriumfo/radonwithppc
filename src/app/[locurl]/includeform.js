'use client';

export default function QuoteForm({ skucode, thumbnail, boothsize }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const quotedta = {
      skucode,
      imagecode: thumbnail,
      boothsize,
    };
    localStorage.setItem('quotedata', JSON.stringify(quotedta));
    window.location.href = '/exhibit-form';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="skucode" value={skucode} />
      <input type="hidden" name="imagecode" value={thumbnail} />
      <input type="hidden" name="boothsize" value={boothsize} />
      <input type="submit" name="submit" value="GET QUOTE" />
    </form>
  );
}