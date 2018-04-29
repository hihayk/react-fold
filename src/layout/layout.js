import React from 'react'
import styled from 'styled-components'

export const makeSize = (property, size) => {
  if (size === 'remaining') {
    return 'flex: 1;'
  }
  if (size === 'full') {
    return `${property}: 100%;`
  }
  return size && `${property}: ${size};`
}

const LayoutWrapper = styled.div`
  ${props => makeSize('width', props.width)};
  ${props => makeSize('height', props.height)};
  ${props => makeSize('min-width', props.minWidth)};
  ${props => makeSize('min-height', props.minHeight)};
  ${props => makeSize('max-width', props.maxWidth)};
  ${props => makeSize('max-height', props.maxHeight)};
  ${props => props.scrollableSections && 'display: flex; flex-direction: column'};
`

const Sections = styled.div`
  flex-direction: ${props => props.verticalSections ? 'column' : 'row'};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  ${props => props.scrollableSections && 'overflow: auto; height: 100%'};
`

const SectionWrapper = styled.div`
  flex-shrink: 0;
  ${props => makeSize('width', props.width)};
  ${props => makeSize('height', props.height)};
  ${props => makeSize('min-width', props.minWidth)};
  ${props => makeSize('min-height', props.minHeight)};
  ${props => makeSize('max-width', props.maxWidth) || 'max-width: 100%'};
  ${props => makeSize('max-height', props.maxHeight)};

  ${props => props.spaceAfter && !props.verticalSections && `padding-right: ${props.spaceAfter}`};
  ${props => props.spaceAfter && props.verticalSections && `padding-bottom: ${props.spaceAfter}`};
`

const TopSectionWrapper = styled.div`
  ${props => props.spaceAfter && `padding-bottom: ${props.spaceAfter}`};
`

const Layout = ({
  width,
  height,
  minWidth,
  minHeight,
  sections,
  topSections,
  verticalSections,
  scrollableSections
}) => {
  const renderTopSectionsList = () => {
    if (topSections) {
      const topSectionsList = topSections.map((topSection, index) => (
        <TopSectionWrapper
          key={index}
          spaceAfter={topSection.spaceAfter}
        >
          {topSection.content}
        </TopSectionWrapper>
      ))
      return topSectionsList
    }
  }

  const renderSectionsList = () => {
    if (sections) {
      const sectionsList = sections.map((section, index) => (
        <SectionWrapper
          key={index}
          width={section.width}
          minWidth={section.minWidth}
          height={section.height}
          minHeight={section.minHeight}
          spaceAfter={section.spaceAfter}
        >
          {section.content}
        </SectionWrapper>
      ))
      return sectionsList
    }
  }

  return (
    <LayoutWrapper
      width={width}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      scrollableSections={scrollableSections}
    >
      {renderTopSectionsList()}

      <Sections
        scrollableSections={scrollableSections}
      >
        {renderSectionsList()}
      </Sections>
    </LayoutWrapper>
  )
}

Layout.defaultProps = {
}

export default Layout
