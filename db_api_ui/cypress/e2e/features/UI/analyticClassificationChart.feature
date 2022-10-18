Feature: I login account dev nightly to analytics chart

  I want to open to login page and analytics database via chart

  Background:
    Given I open and login testPage
  Scenario Outline: Verify analytics database via classification chart
    Then I enter url "<url>" to check
    Then I show url "<url>"
    Then I verify the result of this table
    Examples:
      | url                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
      | https://test.actable.ai/superset/explore/?form_data=%7B%22datasource%22%3A%22239__table%22%2C%22viz_type%22%3A%22classification_prediction%22%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22prediction%22%3A%22Species%22%2C%22all_columns%22%3A%5B%22SepalLengthCm%22%2C%22SepalWidthCm%22%2C%22PetalLengthCm%22%2C%22PetalWidthCm%22%5D%2C%22ratio%22%3A20%2C%22optimization_presets%22%3Afalse%2C%22adhoc_filters%22%3A%5B%5D%2C%22sql%22%3Anull%2C%22databaseName%22%3A%22examples%22%7D |


# Scenario Outline: Verify analytics database via classification chart
#   Then I click on source menu
#   Then I click on upload data and csv menu
#   Then I upload csv file
#   Then I click on more option button
#   Then I enter the "<tableName>" table name
#   Then I select to example of database
#   Then I select to replace of table exist
#   Then I click on save button
#   Then I click on abcTestabc table
#   Then I verify the result of this table
#   Then I click on table in analysis
#   Then I input "<valueSearch>" in search textbox
#   Then I click on classification image
#   Then I input "<valuePredictedTarget>" in predicted target
#   Then I remove id
#   Then I remove species
#   Then I click on run query button
#   Then I verify the result of this table
#   Then I click on source menu
#   Then I click on table menu
#   Then I click on extend this table to delete
#   Then I click on delete button
#   Then I click on OK button to confirm
#   Then I verify removed this table
#   Examples:
#     | tableName  | valueSearch    | valuePredictedTarget |
#     | abcTestabc | classification | Species              |

# Scenario Outline: Verify analytics database via regression chart
#   Then I click on source menu
#   Then I click on upload data and csv menu
#   Then I upload csv file
#   Then I click on more option button
#   Then I enter the "<tableName>" table name
#   Then I select to example of database
#   Then I select to replace of table exist
#   Then I click on save button
#   Then I click on abcTestabc table
#   Then I verify the result of this table
#   Then I click on table in analysis
#   Then I input "<valueSearch>" in search textbox
#   Then I click on regression image
#   Then I input "<valuePredictedTarget>" in predicted target
#   Then I remove id
#   Then I click on run query button
#   Then I verify the result of this table
#   Then I click on source menu
#   Then I click on table menu
#   Then I click on extend this table to delete
#   Then I click on delete button
#   Then I click on OK button to confirm
#   Then I verify removed this table
#   Examples:
#     | tableName  | valueSearch | valuePredictedTarget |
#     | abcTestabc | Regression  | SepalLengthCm        |

# Scenario Outline: Verify analytics database via Segmentation chart
#   Then I click on source menu
#   Then I click on upload data and csv menu
#   Then I upload csv file
#   Then I click on more option button
#   Then I enter the "<tableName>" table name
#   Then I select to example of database
#   Then I select to replace of table exist
#   Then I click on save button
#   Then I click on abcTestabc table
#   Then I verify the result of this table
#   Then I click on table in analysis
#   Then I input "<valueSearch>" in search textbox
#   Then I click on segmentation image
#   Then I remove id
#   Then I remove species
#   Then I click on run query button
#   Then I verify the result of segmentation
#   Then I click on source menu
#   Then I click on table menu
#   Then I click on extend this table to delete
#   Then I click on delete button
#   Then I click on OK button to confirm
#   Then I verify removed this table
#   Examples:
#     | tableName  | valueSearch  |
#     | abcTestabc | Segmentation |

# Scenario Outline: Verify analytics database via Correlational chart
#   Then I click on source menu
#   Then I click on upload data and csv menu
#   Then I upload csv file
#   Then I click on more option button
#   Then I enter the "<tableName>" table name
#   Then I select to example of database
#   Then I select to replace of table exist
#   Then I click on save button
#   Then I click on abcTestabc table
#   Then I verify the result of this table
#   Then I click on table in analysis
#   Then I input "<valueSearch>" in search textbox
#   Then I click on correlational image
#   Then I input "<valuePredictedTarget>" in predicted target
#   Then I input "<valueComparedFactors>" in compared factors
#   Then I click on run query button
#   Then I verify the result of correlational
#   Then I click on source menu
#   Then I click on table menu
#   Then I click on extend this table to delete
#   Then I click on delete button
#   Then I click on OK button to confirm
#   Then I verify removed this table
#   Examples:
#     | tableName  | valueSearch            | valuePredictedTarget | valueComparedFactors |
#     | abcTestabc | Correlational Analysis | SepalLengthCm        | Select All           |