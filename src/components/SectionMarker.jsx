const SectionMarker = ({ num, label, children }) => (
  <div className='section-marker'>
    <span className='num'>{num}</span>
    <div className='meta'>
      <span className='label'>{label}</span>
      <h2 className='heading'>{children}</h2>
    </div>
  </div>
);

export default SectionMarker;
